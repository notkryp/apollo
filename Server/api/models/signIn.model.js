import mongoose from "mongoose";

const signInModel = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const signInUser = mongoose.model("signIn", signInModel);

export default signInUser;
