import cloudinary from "../lib/cloudinaryConfig.js";
import { Students } from "../schema/studentSchema.js";

// CRUDE of Students
// 1. Create Section

export const createStudents = async (req, res) => {
  try {
    const ExistName = await Students.findOne({
      student_name: req.body.student_name,
    });
    if (ExistName) {
      return res.status(409).json({
        message: "This name already exist, please enter another name.",
      });
    }
    //console.log(req.file);
    const CloudinaryResponce = await cloudinary.uploader.upload(req.file.path);
    //console.log(CloudinaryResponce);
    const newStudent = await new Students({
      ...req.body,
      imgurl: CloudinaryResponce.secure_url,
    }).save();
    return res.status(201).json({
      message: "Student data create Successfully",
      data: newStudent,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "internal server error",
    });
  }
};

// 2.1. Get all Students data
export const getAllStudents = async (req, res) => {
  try {
    const getallStudent = await Students.find();
    return res.status(200).json({
      message: "All students data fetch successfully.",
      data: getallStudent,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "internal server error.",
    });
  }
};

// 2.2. Get single student data

export const getSingleStudentById = async (req, res) => {
  try {
    const singlestudent = await Students.findById(req.params.id);
    return res.status(200).json({
      message: "Single Student data fetch successfully.",
      data: singlestudent,
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server error.",
    });
  }
};
//   3. update sutdent data
export const updateStudentById = async (req, res) => {
  try {
    const updateStudent = await Students.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    return res.status(200).json({
      message: "Data updated Successfully.",
      data: updateStudent,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error.",
    });
  }
};

// 3. Delete Student data
export const deleteStudentById = async (req, res) => {
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
      message: "internal server error",
    });
  }
};
