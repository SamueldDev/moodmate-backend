

import {Model, DataTypes} from 'sequelize';
import sequelize from '../config/db.js';

class Suggestion extends Model {}


Suggestion.init(
  {
    // Model attributes are defined here

    category: { 
        type: DataTypes.STRING  // e.g., "quote", "music", "activity"
     },
     content: { 
        type: DataTypes.TEXT 
    },
    mood: {
         type: DataTypes.ENUM('happy', 'sad', 'tired', 'angry', 'relaxed'),
         allowNull: false 
        }

  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Suggestion', // We need to choose the model name
    tableName: "suggestions",
    timestamps: true,
  },
);

export default Suggestion;




 