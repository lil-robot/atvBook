let formulario = document.getElementById("formulario");
let inpTitulo = document.getElementById('inp_titulo');
let inpAno = document.getElementById('inp_ano');
let inpRadioTitulo = document.getElementById('escolha_livro_titulo');
let inpRadioAno = document.getElementById('escolha_livro_ano');

formulario.addEventListener('submit', pesquisar);
inpRadioAno.addEventListener('change', mudarInput);
inpRadioTitulo.addEventListener('change', mudarInput);

function pesquisar(evento) {
  evento.preventDefault();

  let inputRadioValue = document.querySelector('input[name=escolha_livro]:checked').value;

  if (inputRadioValue === "titulo") {
    window.location.assign('/buscar?titulo=' + inpTitulo.value); // Troca de URL para pesquisar o Titulo
  } else {
    window.location.assign('/buscar/' + inpAno.value); // Troca de URL para pesquisar o Ano
  }
}

function mudarInput() {
  let inpRadio = document.querySelectorAll('input[name=escolha_livro]');

  if (inpRadio[0].checked) {
    inpTitulo.disabled = false;
    inpAno.disabled = true;
  } else {
    inpTitulo.disabled = true;
    inpAno.disabled = false;
  }
}