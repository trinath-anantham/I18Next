var config = require('../config.js');
var i18next = require('i18next');
var middleware = require('i18next-express-middleware');
var express = config.express;

i18next
  .use(middleware.LanguageDetector)
  .init({ 
    preload: ['en', 'de', 'it']
   });

var app = config.app;
app.use(middleware.handle(i18next, {
  ignoreRoutes: ["/foo"],
  removeLngFromUrl: false
}));


// in your request handler
app.get('/myRoute', function(req, res) {
  var lng = req.language; // 'de-CH'
  var lngs = req.languages; // ['de-CH', 'de', 'en']
  console.log("language reading......"+lng);
  req.i18n.changeLanguage('en'); // will not load that!!! assert it was preloaded

  var exists = req.i18n.exists('myKey');
  var translation = req.t('myKey');
  console.log("exists:" +exists+", translation : "+translation);
});

// in your views, eg. in pug (ex. jade)
// div=t('myKey')