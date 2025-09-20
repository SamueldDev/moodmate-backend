


import  Suggestion  from "../models/SuggestionModel.js";

// get suggested mode
const allowedMoods = ["sad", "tired", "happy", "angry", "relaxed"];

export const getSuggestionByMood = async (req, res) => {
  const { mood } = req.query;

  if (!mood) {
    return res.status(400).json({
      error: `mood query parameter is required. Example: /api/suggestions?mood=happy`,
    });
  }

  if (!allowedMoods.includes(mood)) {
    return res.status(400).json({
      error: `Invalid mood "${mood}". Must be one of: ${allowedMoods.join(", ")}`,
    });
  }

  try {
    const suggestions = await Suggestion.findAll({
      where: { mood },
      attributes: ["category", "content"],
    });

    res.json(suggestions);
  } catch (err) {
    res.status(500).json({
      message: "Failed to fetch suggestions",
      error: err.message,
    });
  }
};



// get all suggestion from the db
export const getAllSuggestion = async (req, res) => {
  const suggestions = await Suggestion.findAll(); // return everything
  res.json(suggestions);
}
