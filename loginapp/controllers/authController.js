import userModel from "../model/userModel.js"
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


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



    
} catch (error) {
    return res.status(500).json({message:"Internal Server Error.", error})
    
}

}