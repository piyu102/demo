var express = require('express');

var app = express();

app.get('/:id/:name', function(req,res){
res.send("The id is "+ req.params.id + " name is " + req.params.name);

}); 

app.listen(3000, function(){
	console.log('Server Starting....');
	
});