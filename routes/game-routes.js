const express = require('express');
const router = express.Router();

const gameController = require('./../controllers/game-controller');

router.post('/', gameController.createGame);
router.get('/:id', gameController.findById);
router.get('/', gameController.findAll);
router.delete('/:id', gameController.deleteGame);
router.put('/:id', gameController.updateGame);

module.exports = router;