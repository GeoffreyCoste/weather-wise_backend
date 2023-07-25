const Cities = require('../database/models/cities.model');

exports.getAllCities = () => {
    return Cities.find().exec();
}