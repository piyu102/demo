var express = require('express');

var app = express();

app.get('/',function(req,res){
	
	res.send("HELLO...!!");
	
});

app.listen(3600 ,function(){
	
	console.log("Connecting!!!")
});