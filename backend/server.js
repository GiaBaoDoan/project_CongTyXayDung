import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import BlogRoutes from "./routes/blogs.route.js";
import authRoute from "./routes/auths.route.js";
import { verifyToken } from "./middelware/verifyToken.js";
const app = express();
dotenv.config();
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
const port = process.env.PORT || 8080;
// connect DB
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log("Connected successfully");
  } catch (err) {
    console.log(err);
  }
};
// define routes
app.use("/api/blogs", verifyToken, BlogRoutes);
app.use("/api/auth", authRoute);

// config error
app.use((err, req, res, next) => {
  const errorStatus = err.message || 500;
  const errorMessage = err.message || "Something went wrong";
  return res.status(errorStatus).send(errorMessage);
});
// run port
app.listen(port, () => {
  connect();
  console.log(`Backend is runing on ${port}`);
});
