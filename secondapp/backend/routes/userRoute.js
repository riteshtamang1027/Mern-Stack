import express from 'express';
import { createlogin, createRegister, getallUser } from '../controllers/userControllers.js';
const router = express.Router();

router.post("/register",createRegister);
router.post("/login",createlogin);
router.get("/",getallUser);
router.get("/:id",);
router.patch("/:id",);
router.delete("/:id",);



export default router;