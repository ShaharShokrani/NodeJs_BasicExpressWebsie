const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodeMailer = require('nodemailer');
const mustache = require('mustache');
const fs = require("fs")

var app = express();

// To set functioning of mustachejs view engine
app.engine('html', function (filePath, options, callback) { 
    fs.readFile(filePath, function (err, content) {
        if(err)
            return callback(err)        
        var rendered = mustache.to_html(content.toString(),options);
        return callback(null, rendered)
    });
  });

// Setting mustachejs as view engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','html');

app.use(express.static(path.join(__dirname,'/static')));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended:false
// }));

app.get('/', function(req, res){
    console.log('Hello world');
    res.render('index.html', {name: 'Shahar'});
});

app.listen(3000);
console.log('Server is running on port 3000');