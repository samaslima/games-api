const { DataTypes } = require('sequelize');
const sequelize = require('./../data/db');

const player = sequelize.define (
    'player',
    {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        }
    }
);

sequelize.sync();

module.exports = player;  