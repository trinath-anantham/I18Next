var config = require('./config.js');
var express = config.express;
var app = config.app;
var path = config.path;

app.use(express.static(path.join(__dirname, '/../static')));

app.get('/test', function(req, res){
    res.send("Working fine");
});

module.exports.app = app;