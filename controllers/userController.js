

import User from "../models/UserModel.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";


dotenv.config();

// create a new user
export const createUser = async (req, res) => {
    const { email, password } = req.body

    const exitingUser = await User.findOne({ where: { email } });

    if(exitingUser){
        return res.status(404).json({
            status: false,
            message: "email has already been used",
            data: []
        })
    }

    const hashed_password = await bcrypt.hash(password, 10);

    const user = await User.create({ name, email, password:hashed_password})

    if(!user){
        return res.status(400).json({
            status: false,
            message: "could not create a user",
            data: []

        })
    }

    return res.status(200).json({
        status : true,
        message: "User created successfully",
        data: user
    })
}




// log a user in
export const loginUser = async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ where: { email }});

    if(!user){
        return res.status(404).json({
            status: false,
            message: "invalid email or password",
            data: []
        })
    }

    const comparePassword = await bcrypt.compare(password, user.password)

    if(!comparePassword){
        return res.status(404).json({
            status: false,
            message: "Invalid email or password",
            data: []
        })
    }


    let payload = {
        id : user.id,
        email: user.email,
        name : user.name
    }

    let token = jwt.sign({payload}, process.env.JWT_SECRET, {
        expiresIn: "1h"
    })

    payload.token = token

    return res.status(200).json({
        status: true,
        message: "login sucessful",
        data: payload
    })
}