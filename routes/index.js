var express = require('express');
var app = express();

let carouselRoute = require('./carouselRoute');


app.use('/carousel', carouselRoute);

module.exports=app;

