const {
    getAllCities
} = require('../queries/cities.queries');

exports.citiesAll = async (req, res, next) => {
    try {
        const cities = await getAllCities();
        if (!cities) {
            throw ({
                message: 'Get all Cities request failed'
            })
        } else {
            res.status(200).json(cities);
        }
    } catch (error) {
        res.status(400).json({
            error
        });
    }
}