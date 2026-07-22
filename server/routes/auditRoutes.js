import express from "express";
import { uploadLogs, getLogs } from "../controller/auditController.js";

const router = express.Router();

router.get("/", getLogs);

router.post("/upload", uploadLogs);

export default router;