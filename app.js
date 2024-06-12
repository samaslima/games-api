const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

const gameModel = require('./models/game');
const playerModel = require('./models/player');

const routerGame = require('./routes/game-routes');
const routerPlayer = require('./routes/player-routes');

app.use(express.json());
app.use(cors());

app.use('/games', routerGame);
app.use('/players', routerPlayer);

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});