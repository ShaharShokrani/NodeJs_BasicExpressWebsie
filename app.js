var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var nodeMailer = require('nodemailer');
var react = require('react');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:false
}));

app.get('/', function(req, res){
    console.log('Hello world');
    res.send('<h1>Hello world</h1>');
});

app.listen(3000);
console.log('Server is running on port 3000');