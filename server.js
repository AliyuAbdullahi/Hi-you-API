var express = require('express');
var app = express();
app.listen(3000, function(){
  console.log("App listening on port 3000");
});
app.use('/',function (req,res){
  res.send("Hi you app Running");
});
