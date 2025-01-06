import express from "express";
import { registerUser } from "../controllers/user.controller.js";
import { loginUser } from "../controllers/user.controller.js";
import { getMe } from "../controllers/user.controller.js";

import protect from "../middlewares/authMiddleware.js";

// nested routes
import listRoutes from "./list.routes.js";

const userRoutes = express.Router();

userRoutes.post("/", registerUser);
userRoutes.post("/login", loginUser);
userRoutes.get("/me", protect, getMe);

userRoutes.use("/:userId/lists", listRoutes);

export default userRoutes;
