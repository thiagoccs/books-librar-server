const { Router } = require('express')
const controladores = require('../controladores/favoritos')

const router = Router();

router.get('/', controladores.getFavoritos);
router.delete('/:id', controladores.deleteFavoritos);
router.post('/:id', controladores.postFavoritos);

module.exports = router