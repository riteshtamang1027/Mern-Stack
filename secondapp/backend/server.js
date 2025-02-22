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
  roll_no: { type: Number, required: true, unique: true },
  student_name: { type: String, required: true },
  registation_no: { type: Number, required: true },
  parent_name: { type: String, required: true },
  phone_number: { type: Number, required: true },
});

// Make Table
const Students = mongoose.model("Students", StudentSchema);
// CRUDE of Students

// 1. Create Section

app.post("/Students", async (req, res) => {
  try {
    const ExistName = await Students.findOne({
      student_name: req.body.student_name,
    });
    if (ExistName) {
      return res.status(409).json({
        message: "This name already exist, please enter another name.",
      });
    }
    const newStudent = await new Students(req.body).save();
    return res.status(201).json({
      message: "Student data create Successfully",
      data: newStudent,
    });
    console.log(newStudent);
  } catch (error) {
    return res.status(500).json({
      message: "Internet server error",
    });
  }
});

// 2.1. Get all Students data
app.get("/Students", async (req, res) => {
  try {
    const getallStudent = await Students.find();
    return res.status(200).json({
      message: "All students data fetch successfully.",
      data: getallStudent,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internet server error.",
    });
  }
});

// 2.2. Get single student data

app.get("/Students/:id", async (req, res) => {
  try {
    const singlestudent = await Students.findById(req.params.id);
    return res.status(200).json({
      message: "Single Student data fetch successfully.",
      data: singlestudent,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internet server error.",
    });
  }
});

// 3. Delete Student data
app.delete("/Students/:id", async (req, res) => {
  try {
    const Checkdata = await Students.findByIdAndDelete(req.params.id);
    if (!Checkdata) {
      return res.status(404).json({
        message: "Student data is not available.",
      });
    }

    const deletedata = await Students.findByIdAndDelete(req.params.id);
    return res.status(201).json({
      message: "This Student data delete successfully.",
      data: deletedata,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internet server error",
    });
  }
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(4001, () => {
  console.log("Server is running on http://localhost:4001");
});
