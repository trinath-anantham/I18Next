var controller = require('./basicControllers.js');
var app = controller.app;
console.log("Server started");
app.listen(9192);
console.log("Server listened to 9192 port ");