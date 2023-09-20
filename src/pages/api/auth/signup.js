const bcrypt = require("bcrypt");

import { connectToDatabase } from "../../../database/mongoose";
import User from "../../../models/user";

const postSignup = async (req, res) => {
  const firstName = req.body.firstName;
  const email = req.body.email;
  const password = req.body.password;

  try {
    const connect = await connectToDatabase();

    if (!connect) {
      const error = new Error("Database connection failed!");
      error.statusCode = 500;
      throw error;
    }

    const user = await User.findOne({ email });

    if (user) {
      // user already exits so return
      const error = new Error("Email already exists!");
      error.statusCode = 401;
      throw error;
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = new User({
      firstName,
      email,
      password: hashedPassword,
    });

    const result = await newUser.save();
    res.status(201).json({ message: "User created", userId: result._id });
  } catch (error) {
    console.log(error);
    error.statusCode = error.statusCode || 500;
    res.status(error.statusCode).json({ message: error.message });
  }
};

export default postSignup;
