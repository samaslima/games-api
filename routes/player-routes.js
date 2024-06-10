const express = require('express');
const router = express.Router();

const playerController = require('./../controllers/player-controller');

router.post('/', playerController.createPlayer);
router.get('/:id', playerController.findById);
router.get('/', playerController.findAll);
router.delete('/:id', playerController.deletePlayer);
router.put('/:id', playerController.updatePlayer);

module.exports = router;