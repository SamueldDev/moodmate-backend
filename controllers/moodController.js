

import Mood from "../models/moodModel.js"
import  Suggestion  from "../models/SuggestionModel.js"
import User from "../models/UserModel.js" 

// post a mood
export const createMood = async (req, res) => {
    const { mood } = req.body
    console.log("Decoded req.user:", req.user);
    // const userId = req.user.id

    try{

        const user = await User.findByPk(req.user.id);
        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }

        const newMood = await Mood.create({ mood, userId : user.id });
        const suggestion = await Suggestion.findAll({ where : {mood}});

        res.status(201).json({
            mood: newMood,
            suggestion
        })

    }catch(err){
        res.status(500).json({
            message: "failed to set mood",
            error: err.message
        })
}

}


// get the latest mode
export const getLatestMood = async (req, res) => {
  const userId = req.user.id;

  try {
    const mood = await Mood.findOne({
      where: { userId },
      order: [['createdAt', 'DESC']],
    });

    res.json(mood);
  } catch (err) {
    res.status(500).json({
        message: "failed to fetch mood",
        error: err.message
    });
  }
};
