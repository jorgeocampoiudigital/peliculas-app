const express = require('express');
const router = express.Router();
const generoCtrl = require('../controllers/genero.controller');
const { verificarToken, soloAdmin } = require('../middleware/auth.middleware');

router.get('/', verificarToken, generoCtrl.getAll);
router.get('/:id', verificarToken, generoCtrl.getById);
router.post('/', verificarToken, soloAdmin, generoCtrl.create);
router.put('/:id', verificarToken, soloAdmin, generoCtrl.update);
router.delete('/:id', verificarToken, soloAdmin, generoCtrl.delete);

module.exports = router;
