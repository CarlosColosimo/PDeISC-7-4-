const express = require('express');
const router = express.Router();
const jugadoresController = require('../controllers/jugadoresController');

router.get('/', jugadoresController.getJugadores);
router.get('/:id', jugadoresController.getJugadorById);
router.post('/', jugadoresController.createJugador);
router.put('/:id', jugadoresController.updateJugador);
router.delete('/:id', jugadoresController.deleteJugador);

module.exports = router;
