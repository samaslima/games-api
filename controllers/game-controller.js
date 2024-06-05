const gameModel = require('./../models/game');

module.exports = {
    createGame: (req, res) => {
         gameModel.create(req.body)
            .then((game) => {
                return res.status(200).json(game);
            })
            .catch((err) => {
                return res.json({msg: `error: `}, err);
            })
    },

    findById: (req, res) => {
        gameModel.findOne({ where: { id: req.params.id }})
            .then((game) => {
                return res.status(200).json(game);
            })
            .catch((err) => {
                return res.json({ msg: `error: `}, err);
            })
    },

    findAllGames: (req, res) => {
        gameModel.findAll()
            .then((games) => {
                return res.status(200).json(games);
            })
            .catch((err) => {
                return res.json({ msg: `error: `}, err);
            })
    },

    deleteGame: (req, res) => {
        gameModel.destroy({ where: { id: req.params.id }})
            .then(() => {
                return res.status(200).json({ msg: `game with id ${ req.params.id } deleted`});
            })
            .catch((err) => {
                return res.json({ msg: `error: `}, err);
            })
    },

    updateGame: (req, res) => {
        gameModel.update(req.body, { where: { id: req.params.id } })
            .then(() => {
                return res.status(200).json({ msg: `game with id ${ req.params.id } updated`});
            })
            .catch((err) => {
                return res.json({ msg: `error: `}, err);
            })
    }
}