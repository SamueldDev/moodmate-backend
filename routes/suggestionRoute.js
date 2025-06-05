

import express from "express"


import { getSuggestionByMood } from "../controllers/suggestionController.js"

const router = express.Router()

router.get("/:mood", getSuggestionByMood)

export default router
