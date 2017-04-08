//dependencies
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

//mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/rest_test');


//express.js
var app = express();
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());


//routes
app.use('/api', require('./routes/api'))

app.listen(3000);
console.log("api running on port 3000");
