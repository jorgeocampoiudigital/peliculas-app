const express = require('express');
const router = express.Router();
const directorCtrl = require('../controllers/director.controller');
const { verificarToken, soloAdmin } = require('../middleware/auth.middleware');

router.get('/', verificarToken, directorCtrl.getAll);
router.get('/:id', verificarToken, directorCtrl.getById);
router.post('/', verificarToken, soloAdmin, directorCtrl.create);
router.put('/:id', verificarToken, soloAdmin, directorCtrl.update);
router.delete('/:id', verificarToken, soloAdmin, directorCtrl.delete);

module.exports = router;
