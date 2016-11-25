//Requires
var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express(); 

//Instantiate Morgan to log requests. 
app.use(morgan('dev'))
//Path usage to allow serving of HTML via the public folder. 
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.get('/', function(req, res){
	res.sendFile("index.html");
})

//Listener
var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log("Server is listening on port: "+port);
})

