

import {Model, DataTypes} from 'sequelize';
import sequelize from '../config/db.js';

class Mood extends Model {}

Mood.init(
  {
    // Model attributes are defined here
    mood: {
    type: DataTypes.ENUM('happy', 'sad', 'tired', 'angry', 'relaxed'),
    allowNull: false,
    },
     userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "users", // make sure this matches your Trips table name
        key: "id",
      },
      onDelete: "CASCADE",
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Mood', // We need to choose the model name
    tableName: "moods",
    timestamps: true,
  },
);

export default Mood;
