module.exports = {
	'GET /status': 'APIController.getStatus',

	'GET /getToken': 'UsersController.getToken',
	'POST /auth/register': 'UsersController.register',
	'POST /auth/login': 'UsersController.login',
	'POST /auth/validate': 'UsersController.validate',
};
