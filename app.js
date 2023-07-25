const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const router = require('./routes');
require('./database'); // import mongoose client promise

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
app.use(helmet({
    crossOriginResourcePolicy: false,
})); // Disable cross origin resource policy to allow frontend accessing images
app.use('/public/', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use('/api', router);

module.exports = app;