import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import admissionForm from "./api/routes/form.route.js";
import signInAuth from "./api/routes/auth.route.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Database Connection Successful");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3000, () => {
  console.log("Sever is running on port 3000");
});

app.use("/api/form", admissionForm);
app.use("/api/auth", signInAuth);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
