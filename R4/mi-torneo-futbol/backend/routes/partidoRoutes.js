const express = require('express');
const router = express.Router();
const partidosController = require('../controllers/partidosController');

router.get('/', partidosController.getPartidos);
router.get('/:id', partidosController.getPartidoById);
router.post('/', partidosController.createPartido);
router.put('/:id', partidosController.updatePartido);
router.delete('/:id', partidosController.deletePartido);

module.exports = router;
