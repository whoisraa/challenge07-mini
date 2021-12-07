module.exports = {
    index: async (req, res) => {
        try {
            res.status(200).render('index', {title: 'Express'})
        } catch (error) {
            console.error(error);
            res.status(500).send('internal server error');
        }
    }
}