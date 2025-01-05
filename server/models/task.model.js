import mongoose, { mongo } from "mongoose";

const TaskSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    list: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "List",
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    dueDate: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      required: true,
      // Not Started, On Going, Overdue, Completed, Void
      default: "Not Started",
    },
    priority: {
      type: String,
      required: true,
      // High, Medium, Low
      default: "Medium",
    },
    banner: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);
const Task = mongoose.model("Task", TaskSchema);
export default Task;
