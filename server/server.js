var http = require('http');
var express = require('express');
var app = express();
var fs = require("fs");
app.use('/static', express.static('ui'))
http.createServer(function(request, response) {
    console.log("Request url :"+request.url.toString());
}).listen(3000);


console.log("Server started");