module.exports = {
	'GET /users': 'UsersController.getAll',
	
	'POST /pelanggan/register': 'PenggunaController.penggunaReg',
	'GET /pelanggan/getAll': 'PenggunaController.getAll',
	'GET /pelanggan/getById/:id': 'PenggunaController.getById',
	'PUT /pelanggan/update/:id': 'PenggunaController.updateById',
	'DELETE /pelanggan/delete/:id': 'PenggunaController.deleteById',

	'POST /pesanan/add': 'PesananController.addPesanan',
	'GET /pesanan/getAll': 'PesananController.getAll',
	'GET /pesanan/getByIdPelanggan/:id': 'PesananController.getAllByidPelanggan',
	'PUT /pesanan/update/:id': 'PesananController.updateById',
	'DELETE /pesanan/delete/:id': 'PesananController.deleteById'
};
