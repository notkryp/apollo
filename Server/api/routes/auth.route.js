import express from "express";
import { signInController } from "../controllers/signIn.control.js";

const router = express.Router();

router.post("/login", signInController);

export default router;
