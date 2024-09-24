var express = require('express');
var path = require('path'); 
var bodyparser = require('body-parser');
// создаем приложение, которое будет принимать запросы, обрабатывать их, и отправлять ответы
var app = express();
// обработчик, который будет срабатывать на get запросы, для маршрута '/'

const par = bodyparser.urlencoded({extended:false,});

app.post('/register', par ,function(request, response){
    console.log('post');
    console.log(request.url);
    let str = request.body.login;
    console.log(str);   
    response.send('<h1>' +str+ '</h1>');
 });

app.get('/', function(request, response){
    console.log(request.url);
    // response.send('<h1>Hello, world!</h1>');
    response.sendFile(path.join(__dirname,'/data/007_index.html'));
});

app.get('/about', function(request, response){
    console.log(request.url);
    response.send('<h1>About Page</h1>');
});

app.get('/products', function(request, response){
    console.log(request.url);
    //response.send('<h1>Products Page</h1>');
    response.sendFile(path.join(__dirname,'/data/products.html')); 
});

app.listen(8080, function(){
    console.log('server start on port 8080');
})
