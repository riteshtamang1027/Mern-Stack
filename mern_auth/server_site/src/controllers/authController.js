// import mongoose from "mongoose"
import userModel from "../models/users_model.js"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'


export const register = async (req, res) => {
    const { username, email, password } = req.body
    if (!username || !email || !password) {
        return res.json({ success: false, message: "Missing Details" })
    }
    try {
        // check the user is exist or not
        const existingUser = await userModel.findOne({email});
        if(existingUser){
            return res.status(401).json({success:false,message:"User already exist."})
        }
        const hashedPassword = await bcrypt.hash(password,10)


        const newUser = await new userModel({username, email, password:hashedPassword}).save()

        const token =  jwt.sign({id: username._id},process.env.JWT_SECRET,{expiresIn:"1d"})


    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error" })
    }
}