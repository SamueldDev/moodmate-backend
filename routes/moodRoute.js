
import express from "express"


import { createMood, getLatestMood } from "../controllers/moodController.js";
import { protectedAction } from "../middleware/authMiddleware.js";


const router = express.Router()

router.post("/", protectedAction, createMood)
router.get("/:latest", protectedAction, getLatestMood)

export default router