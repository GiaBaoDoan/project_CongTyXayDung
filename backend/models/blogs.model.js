import mongoose from "mongoose";
const { Schema } = mongoose;
const blogsSchema = new Schema(
  {
    content: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("Blogs", blogsSchema);
