const servicos = require('../servicos/favoritos');

function getFavoritos(_req, res) {
  try {
    const favoritos = servicos.getFavoritos()
    return res.status(200).json(favoritos);
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

function deleteFavoritos(req, res) {
  try {
    const { id } = req.params;

    if (id && Number(id)) {
      const result = servicos.deleteFavoritos(id);

      if (result.status !== 200) return res.status(result.status).send({ message: result.message });

      return res.status(result.status).send({ message: result.message });
    }

    return res.status(422).send({ message: 'Id deve ser um número' });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

function postFavoritos(req, res) {
  try {
    const { id } = req.params;
    const result = servicos.postFavoritos(id);
    console.log(result);

    if (result.status !== 200) return res.status(result.status).send({ message: result.message });

    return res.status(result.status).send({ message: result.message });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = {
  getFavoritos,
  deleteFavoritos,
  postFavoritos,
}