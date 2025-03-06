import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import student_router from './routes/student_router.js';
import userRoute from './routes/userRoute.js';


const app = express();
app.use(express.json());

try {
  mongoose.connect(
    process.env.MONGO_URI
  );
  console.log("MongoDB successfully running.")
} catch (error) {
  console.log("Something went wrong", error);
}

app.use("/Students", student_router);
app.use("/User",userRoute)

app.get("/", (req, res) => {
  res.send("Student backend server running.");
});

app.listen(process.env.APP_PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.APP_PORT}`);
});
