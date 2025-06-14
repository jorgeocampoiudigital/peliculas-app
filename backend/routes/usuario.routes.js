const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/usuario.controller');
const { verificarToken, soloAdmin } = require('../middleware/auth.middleware');

router.post('/', ctrl.registrar);
router.post('/login', ctrl.login);

router.get('/', verificarToken, soloAdmin, ctrl.listar); 
router.put('/:id', verificarToken, soloAdmin, ctrl.actualizarRol);

module.exports = router;