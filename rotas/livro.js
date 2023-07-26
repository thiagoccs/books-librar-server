const { Router } = require('express');
const controladorLivros = require('../controladores/livros')

const router = Router();

router.get('/', controladorLivros.getLivros);
router.get('/:id', controladorLivros.getLivrosById);

router.post('/', controladorLivros.postLivro);

router.patch('/:id', controladorLivros.patchLivros);

router.put('/:id', controladorLivros.putLivros);

router.delete('/:id', controladorLivros.deleteLivros);

module.exports = router