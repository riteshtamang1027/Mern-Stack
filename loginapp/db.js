import mongoose from 'mongoose';

const connectDB = () => {
    try {
        mongoose.connect("")
        console.log("MongoDB connected successfully.");

    } catch (error) {
        console.log("Connection error", error);

    }

}

export default connectDB;
