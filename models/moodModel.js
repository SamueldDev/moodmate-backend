

import {Model, DataTypes} from 'sequelize';
import sequelize from '../config/db.js';

class Mood extends Model {}

Mood.init(
  {
    
    mood: {
    type: DataTypes.ENUM('happy', 'sad', 'tired', 'angry', 'relaxed'),
    allowNull: false,
    },
     userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "users", // must matches Trips table name
        key: "id",
      },
      onDelete: "CASCADE",
    },
  },
  {
    // Other model options
    sequelize, // pass the connection instance
    modelName: 'Mood', // model name
    tableName: "moods", // table name
    timestamps: true, // timestamp
  },
);

export default Mood;
