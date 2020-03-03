const Pengguna = require('#models/Pengguna');
const authService = require('#services/auth.service');
const bcryptService = require('#services/bcrypt.service');

const PenggunaController = () => {
    const penggunaReg = async (req, res) => {
        try {
            const { body } = req;
			const data = {
                names: body.custName,
                ages: body.umur,
				registration_date: body.regDate,
				phone_number: body.phoneNum,
            };
            const pengguna = await Pengguna.create(data);
            return res.status(200).json({ message: 'add.pengguna.success' });
            
        } catch (error) {
            console.error("UsersController.register error: ", { error });
            return res.status(500).json({ msg: 'Internal server error' });
        }
    };

    const getAll = async (req, res) => {
        try {
            const users = await Pengguna.findAll();
            if (users.length != 0) {
                return res.status(200).json({ users });
            } else {
                return res.status(404).json({ message: 'err.pengguna.no_data' });
            }
        } catch (error) {
            console.error("UsersController.getAll error: ", { error });
            return res.status(500).json({ msg: 'Internal server error' });
        }
    };

    const getById = async (req, res) => {
        try {
            const byId = req.params.id;
            const users = await Pengguna.findAll({
                    where: {id: byId}
            });
            if (users.length != 0) {
                return res.status(200).json({ users });
            } else {
                return res.status(404).json({ message: 'err.pengguna.no_data' });
            }
        } catch (error) {
            console.error("UsersController.getAll error: ", { error });
            return res.status(500).json({ msg: 'Internal server error' });
        }
    };

    const updateById = async (req, res) => {
        try {
            const updateId = req.params.id;
            const penggunas = await Pengguna.findAll({
                where: {id: updateId}
            });
            const { body } = req;
            if (penggunas.length != 0) {
                const penggunaUpdate = await Pengguna.update(
                    {
                        names: body.custName,
                        ages: body.umur,
                        registration_date: body.regDate,
                        phone_number: body.phoneNum,
                    },
                    {
                        where: {id: updateId}
                    }
                );
                return res.status(200).json({ message: 'update.pengguna.success' });
            } else {
                return res.status(404).json({ message: 'err.pengguna.no_data' });
            }
        } catch (error) {
            console.error("UsersController.getAll error: ", { error });
            return res.status(500).json({ msg: 'Internal server error' });
        }
    };

    const deleteById = async (req, res) => {
        try {
            const deleteId = req.params.id;
            const penggunas = await Pengguna.findAll({
                where: {id: deleteId}
            });
            if (penggunas.length != 0) {
                const deletePengguna = await Pengguna.destroy({
                    where: {id: deleteId}
                });
                return res.status(200).json({ message: 'delete.pengguna.success' });
            } else {
                return res.status(404).json({ message: 'err.pengguna.no_data' });
            }            
        } catch (error) {
            console.error("UsersController.deleteById error: ", { error });
            return res.status(500).json({ msg: 'Internal server error' });
        }
    };

    return{
        penggunaReg,
        getAll,
        updateById,
        getById,
        deleteById,
    };
};

module.exports = PenggunaController;