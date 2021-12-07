const router = require('express').Router();
const controller = require('../controllers/orderController');

router.get('/', controller.order);

module.exports = router;