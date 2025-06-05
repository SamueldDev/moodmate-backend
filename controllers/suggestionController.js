


import  Suggestion  from "../models/SuggestionModel.js";

// get suggested mode

const allowedmoods = ["sad", "tired", "happy", "angry", "relaxed"]

export const getSuggestionByMood = async (req, res) =>{
    const {mood} = req.params
    
    if(!allowedmoods.includes(mood)){
        return res.status(400).json({
            error: `invalid mood "${mood}". must be one of the ${allowedmoods.join(", ")} ` 
        })
    }

    try{

        const suggestion = await Suggestion.findAll({ 
            where: { mood },
            attributes: ["category", "content"]
        });
        res.json(suggestion)

    }catch(err){
        res.status(500).json({
            message: "failed to find suggestion",
            error: err.message
        })
    }

}