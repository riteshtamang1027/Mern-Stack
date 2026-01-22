import userModel from "../model/userModel.js"
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import * as cookie from 'cookie'
import { use } from "react";


export const register = async (req, res)=>{
    const {userName, email, password}= req.body
    // Check user register or not
   if(!userName || !email || !password){
    return res.json({success:false, message:"You are not Register."})
   }

//    check user exist or not
try {
    const existingEmail = await userModel.findOne({email})
    if(existingEmail){
        return res.status(409).json("You already have account.")
    }
    const hashedPassword = await new bcrypt.hash(password,10)

    const newUser = await  new userModel({userName, email, password:hashedPassword}).save()

    const token  =  jwt.sign({id:userName._id},process.env.JWT_SECRET,{expiresIn:"1d"})

    res.cookie('token',token,{
        httpOnly:true,
        secure:process.env.NODE_ENV === 'production',
        sameSite:process.env.NODE_ENV== 'production'?'none':'strict',
        maxAge:1*60*60*1000
    })

    return res.json({success:true})
    
} catch (error) {
    return res.status(500).json({message:"Internal Server Error.", error})
    
}

}

export const login = async (req, res)=>{
    const {email, password}= req.body

    if(!email || !password){
        return res.json({success:false, message:"Email and Password are required."})
    }

    try {
        const user = await userModel.findOne({email})
        if(!user){
            return res.json({success:false, message:"Invalide Email."})
        }

        const isPassMatch = await bcrypt.compare(password, user.password)
        if(!isPassMatch){
            return res.json({success:false, message:"Invalid Password."})
        }

        const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'1d'})
        res.cookie('token',token,{
            httpOnly:true,
            secure:process.env.NODE_ENV==='production',
            sameSite:process.env.NODE_ENV=='production'?'none':'strict',
            maxAge:1*60*60*1000
        })
        return res.json({success:true, message:"Login Successfull"})
        
        
    } catch (error) {
    return res.status(500).json({message:"Internal Server Error.", error})
        
    }
}

export const logOut = async (req, res)=>{
    try {
        res.clearCookie('token',{
            httpOnly:true,
            secure:process.env.NODE_ENV==='production',
            sameSite:process.env.NODE_ENV=='production'?'none':'strict',
            maxAge:1*60*60*1000
        }
        )
        return res.json({success:true, message:"LogOut Successfull."})
        
    } catch (error) {
    return res.status(500).json({message:"Internal Server Error.", error})
        
    }
}