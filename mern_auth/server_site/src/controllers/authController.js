// import mongoose from "mongoose"
import userModel from "../models/users_model.js"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import cookie from 'cookie'


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
        res.cookie('token',token,{
            httpOnly:true,
            secure:process.env.NODE_ENV==='production',
            sameSite:process.env.NODE_ENV == 'production'?'none':'strict',
            maxAge:1*60*60*1000
        })
    

    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error" })
    }
}