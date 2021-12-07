const {Product} = require('../models');

module.exports = {
    product: async (req, res) => {
        try {
            const products = await Product.findAll();
            res.status(200).render('product', {
                productList: products
            });
        } catch (error) {
            console.error(error);
            res.status(500).send('internal server error');
        }
    }
}