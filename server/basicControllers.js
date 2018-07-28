var express = require('express');
var app = express();
var path = require('path')

app.use(express.static(path.join(__dirname, '/../static')));

app.get('/test', function(req, res){
    res.send("Working fine");
});

module.exports.app = app;