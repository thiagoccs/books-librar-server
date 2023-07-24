const { Router } = require('express');
const servicosLivros = require('../controladores/livros')

const router = Router();

router.get('/', servicosLivros.getLivros);
router.get('/:id', servicosLivros.getLivrosById);

router.post('/', servicosLivros.postLivro);

router.patch('/:id', servicosLivros.patchLivros);

router.put('/:id', servicosLivros.putLivros);

router.delete('/:id', servicosLivros.deleteLivros);

module.exports = router