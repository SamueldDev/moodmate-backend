

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
    // Other model options
    sequelize, // Wpass the connection instance
    modelName: 'Mood', // choose the model name
    tableName: "moods", // choose table name
    timestamps: true, // chose a timestamp
  },
);

export default Mood;
