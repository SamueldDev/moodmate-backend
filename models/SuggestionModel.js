

import {Model, DataTypes} from 'sequelize';
import sequelize from '../config/db.js';

class Suggestion extends Model {}

Suggestion.init(
  {
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
    // Other model options
    sequelize, // pass the connection instance
    modelName: 'Suggestion', 
    tableName: "suggestions", 
    timestamps: true, 
  },
);

export default Suggestion;




 