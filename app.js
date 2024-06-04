const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const gameModel = require('./models/game');

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});