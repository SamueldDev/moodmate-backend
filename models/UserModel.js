

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
    modelName: 'User', // model name
    tableName: "users", // table name
    timestamps: true, // timestamp
  },
);

// the defined model is the class itself
console.log(User === sequelize.models.User); // true


export default User;