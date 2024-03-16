import signInUser from "../models/signIn.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { errorHandler } from "../../utils/error.js";

export const signInController = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password || email === "" || password === "") {
    res.status(400).json({ message: "All fields are required" });
  }

  try {
    const validateUser = await signInUser.findOne({ email });

    if (!validateUser) {
      return next(errorHandler(400, "Invalid Email"));
    }
    const validatePassword = bcryptjs.compareSync(
      password,
      validateUser.password
    );
    if (!validatePassword) {
      return next(errorHandler(400, "Invalid Password"));
    }
    const token = jwt.sign({ id: validateUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validateUser._doc;
    res
      .status(200)
      .cookie("access_token", token, { httpOnly: true })
      .json({ rest });
  } catch (error) {
    next(error);
  }
};

// export const signUpController = async (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password || email === "" || password === "") {
//     res.status(400).json({ message: "All fields are required" });
//   }

//   const salt = bcryptjs.genSaltSync(10);

//   const hashedPassword = bcryptjs.hashSync(password, salt);

//   const newUser = new signInUser({
//     email,
//     password: hashedPassword,
//   });

//   try {
//     await newUser.save();
//     res.status(200).json({ message: "Signup Successfull" });
//   } catch (error) {
//     res.status(500).json({ message: "Internal Backend Error" });
//   }
// };
