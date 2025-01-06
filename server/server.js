// imports
import express from "express";
import cors from "cors";
import taskRouter from "./routes/task.routes.js";
import listRoutes from "./routes/list.routes.js";
import userRoutes from "./routes/user.routes.js";
import mongoose from "mongoose";
import errorHandler from "./middlewares/errorMiddleware.js";

// config
const app = express();
const port = process.env.PORT;
const mongoUri = process.env.MONGO_URI;

// cors
const corsOptions = {
  origin: ["http://localhost:3000"],
};
app.use(cors(corsOptions));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/users", userRoutes);
app.use("/api/lists", listRoutes);
app.use("/api/tasks", taskRouter);

// global errors
app.use(errorHandler);

// database & server connection
mongoose
  .connect(mongoUri)
  .then(() => {
    console.log("Connected to database!");
    app.listen(port, () => console.log(`Server is running on port ${port}`));
  })
  .catch((err) => console.log(`Error connecting to database: ${err}`));
