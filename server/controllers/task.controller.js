// imports
import expressAsyncHandler from "express-async-handler";

// @desc get all tasks from a user's list
// @route GET /api/users/:userId/lists/:listId/tasks
// @access Private
export const getTasks = expressAsyncHandler(async (req, res) => {
  const { listId } = req.params;
  res.json({
    message: `Here are the users tasks with list of id: ${listId}`,
  });
});

// @desc get a specific task from the user's list
// @route GET /api/users/:userId/lists/:listId/tasks/:taskId
// @access Private
export const getTask = expressAsyncHandler(async (req, res) => {
  const { taskId } = req.params;
  res.json({ message: `Here is task number: ${taskId}` });
});

// @desc create a new task inside a user's list
// @route POST /api/users/:userId/lists/:listId/tasks
// @access Private
export const addTask = expressAsyncHandler(async (req, res) => {
  const { listId } = req.params;
  res.json({
    message: `A new task has been created for user with list of id: ${listId}`,
  });
});

// @desc delete a task from a user's list
// @route DELETE /api/users/:userId/lists/:listId/tasks/:taskId
// @access Private
export const deleteTask = expressAsyncHandler(async (req, res) => {
  const { taskId } = req.params;
  res.json({ message: `A task with id of ${taskId} has been deleted` });
});

// @desc update a user's task
// @route PUT /api/users/:userId/lists/:listId/tasks/:taskId
// @access Private
export const updateTask = expressAsyncHandler(async (req, res) => {
  const { taskId } = req.params;
  res.json({ message: `A task with id of ${taskId} has been updated` });
});
