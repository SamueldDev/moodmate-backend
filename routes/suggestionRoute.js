

import express from "express"


import { getSuggestionByMood, getAllSuggestion } from "../controllers/suggestionController.js"

const router = express.Router()

/**
 * @swagger
 * tags:
 *   name: Suggestions
 *   description: Endpoints for mood-based suggestions
 */


/**
 * @swagger
 * /api/suggestions?mood=sad:
 *   get:
 *     summary: Get suggestions for a specific mood
 *     tags: [Suggestions]
 *     parameters:
 *       - in: path
 *         name: mood
 *         schema:
 *           type: string
 *           enum: [happy, sad, tired, angry, relaxed]
 *         required: true
 *         description: Mood to get suggestions for
 *     responses:
 *       200:
 *         description: A list of suggestions for the given mood
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   category:
 *                     type: string
 *                     example: quote
 *                   content:
 *                     type: string
 *                     example: "Tough times never last, but tough people do."
 *       400:
 *         description: Invalid mood parameter
 *       500:
 *         description: Server error
 */

router.get("/", getSuggestionByMood)



 /**
 * @swagger
 * /api/suggestions/all:
 *   get:
 *     summary: Retrieve all mood suggestions
 *     tags: [Suggestions]
 *     responses:
 *       200:
 *         description: A list of all suggestions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   mood:
 *                     type: string
 *                     example: "Happy"
 *                   message:
 *                     type: string
 *                     example: "Stay positive!"
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *       500:
 *         description: Server error
 */

router.get("/all", getAllSuggestion)



export default router
