const gameModel = require('./../models/game');

const createGame = async (req, res) => {
    const game = await gameModel.create(req.body);
    return res.status(200).json(game); 
}

const findById = async (req, res) => {
    const game = await gameModel.findOne({ where: { id: req.params.id }});
    return res.status(200).json(game);
}

const findAll = async (req, res) => {
    const games = await gameModel.findAll();
    return res.status(200).json(games);
}

const deleteGame = async (req, res) => {
    await gameModel.destroy({ where: { id: req.params.id }});
    return res.status(200).json({ msg: `game with id ${ req.params.id } deleted`});
}

const updateGame = async (req, res) => {
    await gameModel.update(req.body, { where: { id: req.params.id } });
    return res.status(200).json({ msg: `game with id ${ req.params.id } updated`});
}

module.exports = {
    createGame,
    findById,
    findAll,
    deleteGame,
    updateGame
}