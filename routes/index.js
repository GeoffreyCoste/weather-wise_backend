const express = require('express');
const router = express.Router();
const cities = require('./cities.routes');

router.use('/cities', cities);

router.get('/', (req, res) => {
    res.status(200).render('home');
});

module.exports = router;