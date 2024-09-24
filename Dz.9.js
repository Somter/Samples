var express = require('express');
var fs = require('fs');

var app = express();

var path = 'dz_logger.txt';
var path2 = 'dz_logger.txt2';

app.get('/file', function (request, response) {
    var data = `Apples - 3$;\nBananas - 5$;\nGrape - 7$\n`;

    fs.appendFile(path, data, function (err) {
        if (err) {
            console.error('Ошибка при записи в файл:', err);
            return;
        }
        console.log('File to add!');
        response.end();
    });
});

app.get('/file2', function (request, response) {
    var data = `1. Electronics;\n2. Cars;\n3. Toys;\n4. Fruits;\n5. Books;`;

    fs.appendFile(path2, data, function (err) {
        if (err) {
            console.error('Ошибка при записи в файл:', err);
            return;
        }
        console.log('File2 to add!');
        response.end();
    });
});

var router = express.Router();
router.route("/")
    .get(function (req, res) {
        res.send('Запрос GET на /product');
    })
router.route("/all")
    .get(function (req, res) {
        fs.readFile(path, 'utf8', function (err, data) {
            if (err) {
                console.error('Ошибка при чтении файла:', err);
                res.status(500).send('Ошибка при чтении файла');
                return;
            }

            var products = data.trim().split('\n');
            var html = '<h1>Все товары:</h1><ul>';

            products.forEach(function (product) {
                html += `<li>${product}</li>`;
            });

            html += '</ul>';
            res.send(html);
        });
    })
router.route("/:name")
    .get(function (req, res) {
        res.send(`Product - ${req.params.name}`);
    })

var router2 = express.Router();
router2.route("/")
    .get(function (req, res) {
        res.send('Запрос GET на /category');
    })
router2.route("/all")
    .get(function (req, res) {
        fs.readFile(path2, 'utf8', function (err, data) {
            if (err) {
                console.error('Ошибка при чтении файла:', err);
                return;
            }

            var products = data.trim().split('\n');
            var html = '<h1>Все категории:</h1><ul>';

            products.forEach(function (product) {
                html += `<li>${product}</li>`;
            });

            html += '</ul>';
            res.send(html);
        });
    })
router2.route("/:name")
    .get(function (req, res) {
        res.send(`Category - ${req.params.name}`);
    })

app.use("/product", router);
app.use("/category", router2);

app.listen(8080, function () {
    console.log('Start server');
});
