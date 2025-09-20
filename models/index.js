
import sequelize from "../config/db.js";
import User from "./UserModel.js";
import Suggestion from "./SuggestionModel.js";
import Mood from "./moodModel.js";


// associations
User.hasMany(Mood, { foreignKey: 'userId' }); 
Mood.belongsTo(User, { foreignKey: 'userId' });



export {sequelize, User, Suggestion, Mood}
