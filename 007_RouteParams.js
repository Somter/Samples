var express = require('express');
var app = express();

// Маршрут для получения категории по её ID
app.get('/category/:categoryId', function(request, response){
    console.log(request.params);
    
    // Получаем параметр categoryId
    let catid = request.params.categoryId;

    // Проверяем значение категории
    if (catid > 10) {
        response.send('<h1>' + catid.toString() + '</h1>');
    } else {
        response.send('<h1>No Category</h1>');
    }
});

// Маршрут для получения продукта по его ID в категории
app.get('/category/:categoryId/product/:productId', function(request, response){
    console.log(`category: ${request.params['categoryId']}`);
    console.log(`product: ${request.params['productId']}`);
    response.send(`<h1>Category: ${request.params['categoryId']}, Product: ${request.params['productId']}</h1>`);
});

app.listen(8080, function() {
    console.log('Server is running on port 8080');
});
