// imports
import express from "express";
import cors from "cors";
import taskRouter from "./routes/task.routes.js";
import projectRouter from "./routes/project.routes.js";
import mongoose from "mongoose";

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
app.use("/api/projects", projectRouter);
app.use("/api/tasks", taskRouter);

app.get("/api", (req, res) => {
  res.json({ text: "Momentum" });
});

// database & server connection
mongoose
  .connect(mongoUri)
  .then(() => {
    console.log("Connected to database!");
    app.listen(port, () => console.log(`Server is running on port ${port}`));
  })
  .catch((err) => console.log(`Error connecting to database: ${err}`));
