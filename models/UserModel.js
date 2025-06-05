

import {Model, DataTypes} from 'sequelize';
import sequelize from '../config/db.js';

class User extends Model {}

User.init(
  {
    // Model attributes are defined here
    id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4, // Or DataTypes.UUIDV1
    primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
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
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'User', // We need to choose the model name
    tableName: "users",
    timestamps: true,
  },
);

// the defined model is the class itself
console.log(User === sequelize.models.User); // true


export default User;