import { User } from "../schema/userSchema.js";
import bcrypt from "bcrypt";
const saltRounds = 10;
import jwt from 'jsonwebtoken'

export const createRegister = async (req, res) => {
  try {
    const checkregister = await User.findOne({ email: req.body.email });
    if (checkregister) {
      return res.status(409).json({
        message: "This user already exist.",
      });
    }
    const hashpassword = await bcrypt.hash(req.body.password, saltRounds);
    const createuserRegister = await new User({
      ...req.body,
      password: hashpassword,
    }).save();
    return res.status(201).json({
      message: "User register create successfully.",
      data: createuserRegister,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error.",
      error: error,
    });
  }
};
export const createlogin = async (req, res) => {
 
     const userExist = await User.findOne({email:req.body.email});
     if(!userExist){
        return res.status(401).json({
            message:'User is not exist.'
        })
     }

     const isPasswordmatch = await bcrypt.compare(req.body.password,userExist.password);
     if(!isPasswordmatch){
        return res.status(401).json({
            message:"Your password is not correct."
        })
     }

    const mytoken = jwt.sign({
        email:userExist.email
      }, 'secretsdfghjkhgfd', { expiresIn: '1h' });

    return res.status(200).json({
        message:"Your token successfully generated.",
        token :mytoken,
        data:userExist
    })
     

};
export const getallUser = async (req, res) => {
  try {
    const getalluser = await User.find(req.body);
    return res.status(200).json({
      message: "All user data fetch successfully.",
      data: getalluser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error.",
      error: error,
    });
  }
};
export const getSingleUserById = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error.",
      error: error,
    });
  }
};
export const updateUserById = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error.",
      error: error,
    });
  }
};
export const DeleteUserById = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error.",
      error: error,
    });
  }
};
