const playerModel = require('./../models/player');

const createPlayer = async (req, res) => {
    const player = await playerModel.create(req.body);
    return res.status(200).json(player);
} 

const findById = async (req, res) => {
    const player = await playerModel.findOne({ where: { id: req.params.id }});
    return res.status(200).json(player);
}

const findAll = async (req, res) => {
    const games = await playerModel.findAll();
    return res.status(200).json(games);
}

const deletePlayer = async (req, res) => {
    await playerModel.destroy({ where: { id: req.params.id }});
    return res.status(200).json(req.params.id);
}

const updatePlayer = async (req, res) => {
    await playerModel.update(req.body, { where: { id: req.params.id } });
    return res.status(200).json({ msg: `player with id ${ req.params.id } updated`});
}

module.exports = {
    createPlayer,
    findById,
    findAll,
    deletePlayer,
    updatePlayer
}