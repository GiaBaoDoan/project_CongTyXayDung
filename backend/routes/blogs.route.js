import express from "express";
import { getBlogs } from "../controllers/getBolgs.controller.js";
const router = express.Router();
router.get("/", getBlogs);
export default router;