const Sequelize = require('sequelize');
const bcryptSevice = require('#services/bcrypt.service');

const sequelize = require('#config/database');

const hooks = {
	// beforeCreate(user) {
	// 	user.password = bcryptSevice.password(user);
	// },
};

const tableName = 'pelanggan';

const Pengguna = sequelize.define('Pengguna', {
	names: {
		type: Sequelize.STRING,
	},
	ages: {
		type: Sequelize.STRING,
	},
	registration_date: {
		type: Sequelize.DATE,
	},
	phone_number: {
		type: Sequelize.STRING,
	},
}, { hooks, tableName });


Pengguna.prototype.toJSON = function () {
	const values = Object.assign({}, this.get());
	return values;
};

module.exports = Pengguna;