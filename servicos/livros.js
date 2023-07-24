const fs = require('fs');

function getTodosOsLivros() {
  return JSON.parse(fs.readFileSync('livros.json'));
}

function getLivrosById(id) {
  const livros = JSON.parse(fs.readFileSync('livros.json'));
  const livro = livros.find((livro) => Number(livro.id) === Number(id));
  return livro;
}

function postLivro(livro) {
  const livros = JSON.parse(fs.readFileSync('livros.json'));
  const novoLivro = {
    id: livros.length + 1,
    ...livro,
  }
  const novaListaDeLivros = [...livros, novoLivro]

  fs.writeFileSync('livros.json', JSON.stringify(novaListaDeLivros));
  return;
}

function patchLivros(id, atributoEditado) {
  let livros = JSON.parse(fs.readFileSync('livros.json'));
  const indiceModificado = livros.findIndex((livro) => Number(livro.id) === Number(id));
  if (indiceModificado == -1) {
    return {status: 400, message: `não existe livro com id: ${id}`}
  }

  const conteudoMudado = { ...livros[indiceModificado], ...atributoEditado }

  livros[indiceModificado] = conteudoMudado;

  fs.writeFileSync('livros.json', JSON.stringify(livros));
  return conteudoMudado;
}

function putLivros(id, atributoEditado) {
  let livros = JSON.parse(fs.readFileSync('livros.json'));
  const indiceModificado = livros.findIndex((livro) => Number(livro.id) === Number(id));

  if (indiceModificado == -1) {
    return {status: 400, message: `não existe livro com id: ${id}`}
  }

  const conteudoMudado = { ...livros[indiceModificado], ...atributoEditado }

  livros[indiceModificado] = conteudoMudado;

  fs.writeFileSync('livros.json', JSON.stringify(livros));
  return conteudoMudado;
}

function deleteLivros(id) {
  let livros = JSON.parse(fs.readFileSync('livros.json'));
  const indiceParaDelecao = livros.findIndex((livro) => Number(livro.id) === Number(id));

  if (indiceParaDelecao == -1) {
    return {status: 400, message: `não existe livro com id: ${id}`};
  }

  livros.splice(indiceParaDelecao, 1)

  fs.writeFileSync('livros.json', JSON.stringify(livros));
  return {status: 200, message: `não existe livro com id: ${id}`};
}

module.exports = {
  getTodosOsLivros,
  getLivrosById,
  postLivro,
  patchLivros,
  putLivros,
  deleteLivros,
}
