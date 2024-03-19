let express = require('express');
let ejs = require('ejs');

let app = express();
let router = require('./router');

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', router);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
