const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const gameModel = require('./models/game');
const playerModel = require('./models/player');

const routerGame = require('./routes/game-routes');
const routerPlayer = require('./routes/player-routes');

app.use(express.json());
app.use('/games', routerGame);
app.use('/players', routerPlayer);

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});