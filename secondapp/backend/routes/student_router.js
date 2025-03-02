import express from 'express';
const router = express.Router();
import { createStudents, deleteStudentById, getAllStudents, getSingleStudentById, updateStudentById } from '../controllers/student_contoller.js';
import multer from "multer";
const upload = multer({ dest: "uploads/" });


router.post("/",upload.single("imgurl"),createStudents);
router.get("/",getAllStudents);
router.get("/:id",getSingleStudentById);
router.patch("/:id",updateStudentById);
router.delete("/:id",deleteStudentById);



export default router;