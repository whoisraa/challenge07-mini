const {Review} = require('../models');

module.exports = {
    review: async (req, res) => {
        try {
            res.status(200).send('Review Page');
        } catch (error) {
            console.error(error);
            res.status(500).send('internal server error');
        }
    }
}