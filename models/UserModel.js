

import {Model, DataTypes} from 'sequelize';
import sequelize from '../config/db.js';

class User extends Model {}

User.init(
  {
    id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4, 
    primaryKey: true,
    },
     name: {
      type: DataTypes.STRING,
      allowNull: false
    },
     email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    // Other model options
    sequelize, // ass the connection instance
    modelName: 'User', 
    tableName: "mood_users", 
    timestamps: true, 
  },
);


export default User;