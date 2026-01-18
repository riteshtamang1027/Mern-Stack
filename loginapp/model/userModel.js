import mongoose from 'mongoose';



const userSchema = new mongoose.Schema({
    userName:{type:String, require:true},
    email:{type:String, require:true, unique:true},
    password:{type:String, required:true},
    verifyOTP:{type:String, default:""},
    verifyOTPExpiredAt:{type:Number, default:0},
    isAccountVerified:{type:Boolean, default:false},
    resetOTP:{type:String, default:""},
    resetOTPExpiredAt:{type:Number, default:0},
})

const userModel= mongoose.model("user",userSchema)

export default userModel


