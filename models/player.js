const { DataTypes } = require('sequelize');
const sequelize = require('./../data/db');

const player = sequelize.define (
    'player',
    {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
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