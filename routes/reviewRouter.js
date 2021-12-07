const router = require('express').Router();
const controller = require('../controllers/reviewController');

router.get('/', controller.review);

module.exports = router;