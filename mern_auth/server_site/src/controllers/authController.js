// import mongoose from "mongoose"
import userModel from "../models/users_model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import cookie from "cookie";


// Create users
export const register = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.json({ success: false, message: "Missing Details" });
  }
  try {
    // check the user is exist or not
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({ success: false, message: "User already exist." });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await new userModel({
      username,
      email,
      password: hashedPassword,
    }).save();

    const token = jwt.sign({ id: username._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV == "production" ? "none" : "strict",
      maxAge: 1 * 60 * 60 * 1000,
    });

    return res.json({success:true})

  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};


// login user
export const login = async (req, res) => {
  const { email, password } = req.body;
//   check email and password is enter or not 
  if (!email || !password) {
    return res.json({
      success: false,
      message: "Email and Password are required.",
    });
  }

//   if email and password enter then run this section
  try {
    // Here, to find user from their email
    const user = await userModel.findOne({ email });
// Check that email user is available or not
    if (!user) {
      return res.json({ success: false, message: "Invalide email." });
    }

    // if user exist with the email then check their actual password and enter password

    const isMatchpass = await bcrypt.compare(password, user.password);

    if (!isMatchpass) {
      return res.json({ success: false, message: "Invalide password." });
    }
    // both password is match then generate token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV == "production" ? "none" : "strict",
      maxAge: 1 * 60 * 60 * 1000,
    });

    return res.json({success:true})
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
