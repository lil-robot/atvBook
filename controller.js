let model = require('./model');

function getAll(req, res) {
    res.render('index', { lista: model() });
}

function pesquisarPorTitulo(req, res) {
    let titulo = req.query?.titulo || '';
    let listaFiltrada = model().filter(livro => livro.titulo.toUpperCase().includes(titulo.toUpperCase()));
    res.render('index', { lista: listaFiltrada });
}

function pesquisarPorAno(req, res) {
    let ano = req.params?.ano || '';
    let listaFiltrada = model().filter(livro => livro.ano == ano);
    res.render('index', { lista: listaFiltrada });
}

module.exports = {
    pesquisarPorAno,
    pesquisarPorTitulo,
    getAll
}