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

const listRoutes = express.Router();

listRoutes.get("/:id", getLists);
listRoutes.post("/:id", addList);
listRoutes.get("/:id/target/:lid", getList);
listRoutes.put("/:id/target/:lid", updateList);
listRoutes.delete("/:id/target/:lid", deleteList);

export default listRoutes;
