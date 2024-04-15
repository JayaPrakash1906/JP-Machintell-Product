const viewProductModel = require('../../model/ProductModel/viewproductmodel');

const viewproductscontroller = async (req, res) => {
    try {
        const {id} = req.params;
        const [result] = await viewProductModel(id);

        // If no result is found
        if (!result) {
            res.status(404).json({ error: 'No product found with the given ID' });
        } else {
            res.send(result);
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = viewproductscontroller;
