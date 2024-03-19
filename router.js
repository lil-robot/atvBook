let express = require('express');
let router = express.Router();

let controller = require('./controller');

router.get('/', controller.getAll);

router.get('/buscar', controller.pesquisarPorTitulo);

router.get('/buscar/:ano', controller.pesquisarPorAno);

module.exports = router;