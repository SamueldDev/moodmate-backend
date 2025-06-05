
import sequelize from "../config/db.js";
import User from "./UserModel.js";
import Suggestion from "./SuggestionModel.js";
import Mood from "./moodModel.js";
// Make associations
User.hasMany(Mood);
Mood.belongsTo(User);

// Suggestion.belongsToMany(Mood, { through: 'MoodSuggestions' }); // If applicable

export {sequelize, User, Suggestion, Mood}
