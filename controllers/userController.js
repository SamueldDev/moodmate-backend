

import User from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// Create a new user (signup)
export const createUser = async (req, res) => {
  const { email, password, name } = req.body;

  // check if email already exists
  const existingUser = await User.findOne({ where: { email } });

  if (existingUser) {
    return res.status(400).json({
      status: false,
      message: "Email already in use",
      data: [],
    });
  }

  // hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // create the user
  const user = await User.create({ name, email, password: hashedPassword });

  return res.status(201).json({
    status: true,
    message: "User created successfully",
    data: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  });
};

// Login user
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // find user
  const user = await User.findOne({ where: { email } });
  if (!user) {
    return res.status(401).json({
      status: false,
      message: "Invalid email or password",
      data: [],
    });
  }

  // compare passwords
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({
      status: false,
      message: "Invalid email or password",
      data: [],
    });
  }

  // prepare payload
  const payload = {
    id: user.id,
    email: user.email,
    name: user.name,
  };

  // sign JWT
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });

  return res.status(200).json({
    status: true,
    message: "Login successful",
    data: {
      token,
      user: payload,
    },
  });
};
