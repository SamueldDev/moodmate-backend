

import {Model, DataTypes} from 'sequelize';
import sequelize from '../config/db.js';
import User from './UserModel.js';

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
        model: User, 
        key: "id",
      },
      onDelete: "CASCADE",
    },
  },
  {
    // Other model options
    sequelize, // pass the connection instance
    modelName: 'Mood', 
    tableName: "moods", 
    timestamps: true, 
  },
);

export default Mood;
