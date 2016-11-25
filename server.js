//Requires
var express = require('express');
var morgan = require('morgan');
var app = express(); 

//Routes
app.get('/', function(req, res){
	res.send("./public/index.html");
})

//Listener
var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log("Server is listening on port: "+port);
})

