// imports
import express from "express";

// controller functions
import {
  getTasks,
  getTask,
  addTask,
  updateTask,
  deleteTask,
} from "../controllers/task.controller.js";

const taskRoutes = express.Router({ mergeParams: true });

taskRoutes.get("/", getTasks);
taskRoutes.post("/", addTask);
taskRoutes.get("/:taskId", getTask);
taskRoutes.delete("/:taskId", deleteTask);
taskRoutes.put("/:taskId", updateTask);

export default taskRoutes;
