

import express from "express"
import { createUser, loginUser } from "../controllers/userController.js"

const router = express.Router()


// create user
router.use("/register", createUser)

//log user in
router.use("/login", loginUser)

export default router