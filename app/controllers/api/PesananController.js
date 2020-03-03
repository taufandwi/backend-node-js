const Pesanan = require('#models/Pesanan');

const PesananController = () => {
    const addPesanan = async (req, res) => {
        try {
            const { body } = req;
			const data = {
                id_pelanggan: body.idPelanggan,
                purchase_date: body.purchaseDate,
				total_price: body.totalPrice,
            };
            const pesanan = await Pesanan.create(data);
            return res.status(200).json({ message: 'add.pesanan.success' });
            
        } catch (error) {
            console.error("PesananController.addPesanan error: ", { error });
            return res.status(500).json({ msg: 'Internal server error' });
        }
    };

    const getAll = async (req, res) => {
        try {
            const pesanans = await Pesanan.findAll();
            if (pesanans.length != 0) {
                return res.status(200).json({ pesanans });
            } else {
                return res.status(404).json({ message: 'err.pesanan.no_data' });
            }
        } catch (error) {
            console.error("PesananController.getAll error: ", { error });
            return res.status(500).json({ msg: 'Internal server error' });
        }
    };

    const getAllByidPelanggan = async (req, res) => {
        try {
            const byId = req.params.id;
            const pesanans = await Pesanan.findAll({
                where: {id_pelanggan: byId}
            });
            if (pesanans.length != 0) {
                return res.status(200).json({ pesanans });
            } else {
                return res.status(404).json({ message: 'err.pesanan.no_data' });
            }
        } catch (error) {
            console.error("PesananController.getAll error: ", { error });
            return res.status(500).json({ msg: 'Internal server error' });
        }
    };

    const updateById = async (req, res) => {
        try {
            const updateId = req.params.id;
            const pesanans = await Pesanan.findAll({
                where: {id: updateId}
            });
            const { body } = req;
            if (pesanans.length !=0) {
                const pesananUpdate = await Pesanan.update(
                    {
                        id_pelanggan: body.idPelanggan,
                        purchase_date: body.purchaseDate,
                        total_price: body.totalPrice,
                    },
                    {
                        where: {id: updateId}
                    }
                );
                return res.status(200).json({ message: 'update.pesanan.success' });
            }
            else {
                return res.status(404).json({ message: 'err.pesanan.id_not_found' });
            }
        } catch (error) {
            console.error("PesananController.updateById error: ", { error });
            return res.status(500).json({ msg: 'Internal server error' });
        }
    };

    const deleteById = async (req, res) => {
        try {
            const deleteId = req.params.id;
            const pesanans = await Pesanan.findAll({
                where: {id: deleteId}
            });
            const { body } = req;
            if (pesanans.length !=0) {
                const deletePesanan = await Pesanan.destroy({
                    where: {id: deleteId}
                });
                return res.status(200).json({ message: 'delete.pesanan.success' });
            }
            else {
                return res.status(404).json({ message: 'err.pesanan.id_not_found' });
            }    
        } catch (error) {
            console.error("PesananController.deleteById error: ", { error });
            return res.status(500).json({ msg: 'Internal server error' });
        }
    };

    return{
        addPesanan,
        getAll,
        getAllByidPelanggan,
        updateById,
        deleteById,
    };
};

module.exports = PesananController;