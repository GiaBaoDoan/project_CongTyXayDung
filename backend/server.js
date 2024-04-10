import express from "express";
import dotenv from "dotenv";
const app = express();
dotenv.config();
const port = process.env.PORT || 8080;
// define routes
app.get("/api/getBlogs", (req, res) => {
  return res.json("Is Ok");
});

app.listen(5000, () => {
  console.log(`Backend is runing on ${port}`);
});
