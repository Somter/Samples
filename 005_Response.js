var express = require('express'); 
var http = require('http'); 
var path = require('path'); 

var app = express(); 

var port = 8080; 

app.get('/', function(req, res) { 

	// метод cookie позволяет создавать cookies 
	res.cookie('someCookie', {httpOnly: true, maxAge: 2000}); 
	res.cookie('anotherCookie', 'this is another cookie!'); 

	// удалить cookie 
	//res.clearCookie('anotherCookie'); 

	// метод sendFile позволяет указывать в ответе файл для чтения браузером 
	res.sendFile(path.join(__dirname,'/data/007_index.html')); 
}); 

app.listen(port, function() {
	console.log('app running on port ' + port); 
}); 