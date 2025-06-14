const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/productora.controller');
const { verificarToken, soloAdmin } = require('../middleware/auth.middleware');

router.get('/', verificarToken, ctrl.getAll);
router.get('/:id', verificarToken, ctrl.getById);
router.post('/', verificarToken, soloAdmin, ctrl.create);
router.put('/:id', verificarToken, soloAdmin, ctrl.update);
router.delete('/:id', verificarToken, soloAdmin, ctrl.delete);

module.exports = router;
