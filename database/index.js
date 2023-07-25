const mongoose = require('mongoose');
require('dotenv').config();

const DB_CONNECTION = process.env.DB_CONNECTION;

mongoose.set("strictQuery", false);
mongoose.set('debug', true);

exports.clientPromise = mongoose.connect(DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        ssl: true
    })
    .then(() => console.log('Successfully connected to MongoDB database.'))
    .catch((error) => console.log('Connection to MongoDB database failed: ', error));