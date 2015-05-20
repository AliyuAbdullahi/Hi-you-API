var config = require('./config/config');
var express = require('express');
var app = express();
app.listen(config.port, function(){
  console.log("App listening on port "+config.port);
});
app.use('/',function (req,res){
  res.send("Hi you app Running");
});

