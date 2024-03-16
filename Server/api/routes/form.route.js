import express from "express";
import { admissionForm } from "../controllers/form.control.js";

const router = express.Router();

router.post("/admission", admissionForm);

export default router;
