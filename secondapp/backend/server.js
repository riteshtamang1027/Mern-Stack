import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

try {
  mongoose.connect(
    "mongodb+srv://riteshtamang1027:ERvZqUADxBuHjkw6@cluster0.ny1tv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
} catch (error) {
  console.log("Something went wrong", error);
}

// Make Schema Table

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  roll_no: { type: Number, required: true },
  registation_no: { type: Number, required: true },
  parent_name: { type: String, required: true },
  phone_no: { type: Number, required: true },
});

const Student = mongoose.model("Student", StudentSchema);


// Create a Table of student
app.post("/Student", async (req, res) => {
  try {
   
   
    // const ExistStudent = await newStudent.findOne({name:req.body.name})
    // if(ExistStudent){
    //   return res.status(409).json({
    //     message:"This name is already exist, Please Try another name",
    //   })
    // }

    
    const newStudent= await new Student(req.body).save();
    // console.log(newStudent)
    return res.status(201).json(
      {
        message:"Data create successfully !",
        data:newStudent
      });

 

  } catch (error) {
    return res.status(500).json(
      {
        message:"Internet Server error",error
      }
    )
  }

});

app.listen(4001, () => {
  console.log("Server is running http://localhost:4001");
});
app.get("/", (req, res) => {
  res.send("Hello World!");
});
