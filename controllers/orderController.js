const {Product, Order} = require('../models');

module.exports = {
    order: async (req, res) => {
        try {
            const products = await Product.findAll();
            const orders = await Order.findAll();
            // const product_id = await Order.findOne({where: {product_id: product_id}});
            // const products = await Product.findByPk(product_id, {
            //     include: [
            //         {model: Order}
            //     ]
            // });
            res.status(200).render('order', {
                orderList: orders,
                product: products
            })
        } catch (error) {
            console.error(error);
            res.status(500).send('internal server error');
        }
    }
}