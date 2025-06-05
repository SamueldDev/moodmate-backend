

import express from "express"
import { createUser, loginUser } from "../controllers/userController.js"

const router = express.Router()


// create user
router.post("/register", createUser)

//log user in
router.post("/login", loginUser)

export default router