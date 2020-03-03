const Sequelize = require('sequelize');
const bcryptSevice = require('#services/bcrypt.service');

const sequelize = require('#config/database');

const hooks = {
	// beforeCreate(user) {
	// 	user.password = bcryptSevice.password(user);
	// },
};

const tableName = 'pesanan';

const Pesanan = sequelize.define('Pesanan', {
	id_pelanggan: {
		type: Sequelize.STRING,
	},
	purchase_date: {
		type: Sequelize.DATE,
	},
	total_price: {
		type: Sequelize.DOUBLE,
	},
}, { hooks, tableName });


Pesanan.prototype.toJSON = function () {
	const values = Object.assign({}, this.get());
	return values;
};

module.exports = Pesanan;