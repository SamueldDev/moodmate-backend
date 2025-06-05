

import Mood from "../models/moodModel.js"
import  Suggestion  from "../models/SuggestionModel.js"

// post a mood
export const createMood = async (req, res) => {
    const { mood } = req.body
    const userId = req.user.id

    try{

        const newMood = await Mood.create({ mood, userId });
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
