const { DataTypes } = require('sequelize');
const sequelize = require('./../data/db');

const game = sequelize.define (
    'game',
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

module.exports = game;  