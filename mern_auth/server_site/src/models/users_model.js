import mongoose from 'mongoose'


const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    verifyOTP: { type: String, default: '' },
    verifyOTPExpiredAT: { type: Number, default: 0 },
    isAccoundVerified: { type: Boolean, default: false },
    resetOTP: { type: String, default: "" },
    resteOTPExpiredAT: { type: Number, default: 0 }, 
})

const userModel = mongoose.models.user || mongoose.model("user", userSchema)

export default userModel;