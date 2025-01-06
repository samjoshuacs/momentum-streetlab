// imports
import express from "express";

// controller functions
import {
  getLists,
  getList,
  addList,
  updateList,
  deleteList,
} from "../controllers/list.controller.js";

// routes
import taskRoutes from "./task.routes.js";

// middlewares
import protect from "../middlewares/authMiddleware.js";

const listRoutes = express.Router({ mergeParams: true });

listRoutes.get("/", protect, getLists);
listRoutes.post("/", protect, addList);
listRoutes.get("/:listId", protect, getList);
listRoutes.put("/:listId", protect, updateList);
listRoutes.delete("/:listId", protect, deleteList);

// task routes
listRoutes.use("/:listId/tasks", taskRoutes);

export default listRoutes;
