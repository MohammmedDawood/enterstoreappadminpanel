var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require("cors");


var app = express();

//request logger
app.use(logger('dev'))


var corsOptions = {
    origin: "http://localhost:8081"
};

//cross Origin
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public-flutter')));


module.exports = app;