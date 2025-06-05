

import sequelize from "../config/db.js"
import Suggestion from "../models/SuggestionModel.js";


await sequelize.sync(); // ensure DB is ready

await Suggestion.bulkCreate([
  { category: 'quote', 
    content: 'Keep your head up.', 
    mood: 'sad' 
    },
  { category: 'music', 
    content: 'https://open.spotify.com/track/happy',
     mood: 'happy' 
    },
  { category: 'activity', 
    content: 'Take a walk outside.', 
    mood: 'tired' 
},
  {
    category: 'quote',
    content: 'Speak when you are angry and you will make the best speech you will ever regret.',
    mood: 'angry'
  },
   {
    category: 'activity',
    content: 'Take a warm bath or listen to ambient sounds.',
    mood: 'relaxed'
  }

]);

console.log('Suggestions seeded!');
process.exit();


 
