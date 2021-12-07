const router = require('express').Router();
const controller = require('../controllers/productController');

router.get('/', controller.product);

module.exports = router;