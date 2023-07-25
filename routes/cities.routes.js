const express = require('express');
const router = express.Router();
const {
    citiesAll
} = require('../controllers/cities.controller');

router.get('/', citiesAll);

module.exports = router;