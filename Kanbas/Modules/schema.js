import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: String,
    description: String,
    course: { type: mongoose.Schema.Types.String, ref: "CourseModel" },
  },
  { collection: "modules" }
);
export default schema;