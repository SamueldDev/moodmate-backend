
import express from "express"


import { createMood, getLatestMood } from "../controllers/moodController.js";
import { protectedAction } from "../middleware/authMiddleware.js";


const router = express.Router()

/**
 * @swagger
 * tags:
 *   name: Moods
 *   description: Endpoints for submitting and retrieving moods
 */


/**
 * @swagger
 * /api/moods:
 *   post:
 *     summary: Submit a new mood
 *     tags: [Moods]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               mood:
 *                 type: string
 *                 example: sad
 *     responses:
 *       200:
 *         description: Mood submitted successfully
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 */

router.post("/", protectedAction, createMood)




/**
 * @swagger
 * /api/moods/latest:
 *   get:
 *     summary: Get the latest submitted mood
 *     tags: [Moods]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Latest mood returned
 *       401:
 *         description: Unauthorized
 */

router.get("/:latest", protectedAction, getLatestMood)

export default router