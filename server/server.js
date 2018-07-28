var controllerJs = require('./basicControllers.js');
var config = require('./config.js');
var app = config.app;
console.log("Server started");
app.listen(9192);
console.log("Server listened to 9192 port ");