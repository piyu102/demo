var express = require('express');
var app = express();

app.use(function(req,res,next){

console.log("The request come at "+ Date.now());
next();
});

app.listen(3000);

