import mongoose from "mongoose";

// Make Schema Table
const StudentSchema = new mongoose.Schema({
  roll_no: { type: Number, required: true },
  student_name: { type: String, required: true, unique: true },
  registation_no: { type: Number, required: true },
  parent_name: { type: String, required: true },
  phone_number: { type: Number, required: true },
  imgurl: { type: String, required: true },
});

// Make Table
export const Students = mongoose.model("Students", StudentSchema);
