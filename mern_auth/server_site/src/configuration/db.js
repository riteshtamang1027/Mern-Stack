import mongoose from 'mongoose'


const connectMongoDB = async () => {
   try {
      await mongoose.connect(process.env.MONGO_URI);

      console.log("MongoDB connected successfully.");

   } catch (error) {
      // console.log(error)
      console.log("MongoDB connected failed.",error
      )
   }
}

export default connectMongoDB

