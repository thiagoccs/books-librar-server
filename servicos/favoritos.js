const fs = require('fs');

function getFavoritos () {
  const favoritos = JSON.parse(fs.readFileSync('favoritos.json'));
  return favoritos;
}

function deleteFavoritos(id) {
  const favoritos = JSON.parse(fs.readFileSync('favoritos.json'));
  const indiceParaDelecao = favoritos.filter((livro) => livro.id != Number(id));

  if (indiceParaDelecao.length == favoritos.length) {
    return {status: 400, message: `não existe livro com id: ${id}`};
  }

  fs.writeFileSync('favoritos.json', JSON.stringify(indiceParaDelecao));
  return {status: 200, message: 'Livro apagado com sucesso'};
}

function postFavoritos(id) {
  const livros = JSON.parse(fs.readFileSync('livros.json'));
  const favoritos = JSON.parse(fs.readFileSync('favoritos.json'));

  const livroJaEFavorito = favoritos.find((livro) => livro.id === Number(id));
  if (livroJaEFavorito) {
    return {status: 400, message: 'Livro já está em favoritos'};
  }
  
  const livroInserido = livros.find((livro) => livro.id === Number(id));
  if (livroInserido) {
    favoritos.push(livroInserido);
    fs.writeFileSync('favoritos.json', JSON.stringify(favoritos));
    return {status: 200, message: 'Livro adicionado com sucesso'};
  }

  return {status: 400, message: `Não existe livro com id: ${id}`};
}

module.exports = {
  getFavoritos,
  deleteFavoritos,
  postFavoritos,
}