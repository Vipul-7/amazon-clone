const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

import { connectToDatabase } from "@/database/mongoose";
import User from "@/models/user";

const postLogin = async (req, res) => {
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

    if (!user) {
      const error = new Error("Please enter a valid email and password");
      error.statusCode = 401;
      throw error;
    }

    const campareResult = await bcrypt.compare(password, user.password);

    if (!campareResult) {
      const error = new Error("Please enter a valid email and password");
      error.statusCode = 401;
      throw error;
    }

    const token = jwt.sign(
      {
        email: user.email,
        userId: user._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res
      .status(200)
      .json({ message: "User logged in", token, userId: user._id });
  } catch (error) {
    error.statusCode = error.statusCode || 500;
    res.status(error.statusCode).json({ message: error.message });
  }
};

export default postLogin;
