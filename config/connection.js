const development = {
	database: process.env.DB_NAME,
	username: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	host: process.env.DB_HOST || 'localhost',
	port: process.env.DB_PORT || '3306',
	dialect: process.env.DB_DIALECT || 'mysql' || 'postgres',
};

const testing = {
	database: process.env.DB_NAME,
	username: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	host: process.env.DB_HOST || 'localhost',
	port: process.env.DB_PORT || '3306',
	dialect: process.env.DB_DIALECT || 'mysql' || 'postgres',
};

const production = {
	database: process.env.DB_NAME || 'de2l9lj2j93suv',
	username: process.env.DB_USER || 'wrnsjzkkuvzeso',
	password: process.env.DB_PASSWORD || 'c160781a47026f5a9362a032ef5c4f88578f978c87c6362506808c290c825754',
	host: process.env.DB_HOST || 'ec2-18-210-51-239.compute-1.amazonaws.com',
	port: process.env.DB_PORT || '5432',
	dialect: process.env.DB_DIALECT || 'postgres',
};

module.exports = {
	development,
	testing,
	production,
};