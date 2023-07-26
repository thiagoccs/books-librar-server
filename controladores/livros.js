const servicoLivros = require('../servicos/livros');

const getLivros = (_req, res) => {
  try {
    const livros = servicoLivros.getTodosOsLivros();
    return res.status(200).send(livros);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const getLivrosById = (req, res) => {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      const livro = servicoLivros.getLivrosById(id);
      return res.status(200).send(livro);
    }
    return res.status(422).send({ message: 'Id deve ser um número' });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const postLivro = (req, res) => {
  try {
    const { titulo,  autor, ano } = req.body;

    if (!titulo || !autor || !ano) {
      return res.status(422).send({ message: 'os campos: "titulo, imagem, autor, foto, ano" são obrigatórios' });
    }

    servicoLivros.postLivro(req.body);

    return res.status(201).send('Você fez uma requisição do tipo POST!');
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const patchLivros = (req, res) => {
  try {
    const { id } = req.params;
    if (id && Number(id)) {
      const atributoEditado = req.body;
      const result = servicoLivros.patchLivros(id, atributoEditado);

      if (result.message) return res.status(result.status).send({ message: result.message });

      return res.status(200).send(result);
    }

    return res.status(422).send({ message: 'Id deve ser um número' });

  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const putLivros = (req, res) => {
  try {
    const { id } = req.params;

    if (id && Number(id)) {
      const { titulo, imagem, autor, foto, ano } = req.body;

      if (!titulo || !imagem || !autor || !foto || !ano) {
        return res.status(400).send({ message: 'os campos: "titulo, imagem, autor, foto, ano" são obrigatórios' });
      }

      const result = servicoLivros.putLivros(id, req.body);

      if (result.message) return res.status(result.status).send({ message: result.message });

      return res.status(200).send(result);
    }
    return res.status(422).send({ message: 'Id deve ser um número' });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const deleteLivros = (req, res) => {
  try {
    const { id } = req.params;

    if (id && Number(id)) {
      const result = servicoLivros.deleteLivros(id);

      if (result.status !== 200) return res.status(result.status).send({ message: result.message });

      return res.status(result.status).send({ message: result.message });
    }

    return res.status(422).send({ message: 'Id deve ser um número' });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = {
  getLivros,
  getLivrosById,
  postLivro,
  patchLivros,
  putLivros,
  deleteLivros,
};