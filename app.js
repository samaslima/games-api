const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const gameModel = require('./models/game');
const playerModel = require('./models/player');

const routerGame = require('./routes/game-routes');

app.use(express.json());
app.use('/games', routerGame);

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});