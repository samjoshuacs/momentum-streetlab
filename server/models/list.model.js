import mongoose from "mongoose";

const ListSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
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
    color: {
      type: String,
      required: true,
      // Yellow, Red, Blue
      default: "yellow",
    },
  },
  {
    timestamps: true,
  }
);

const List = mongoose.model("List", ListSchema);
export default List;
