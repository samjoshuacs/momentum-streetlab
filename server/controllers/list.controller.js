// imports
import expressAsyncHandler from "express-async-handler";
import List from "../models/list.model.js";

// @desc get all lists from the user
// @route GET /api/users/:userId/lists
// @access Private
export const getLists = expressAsyncHandler(async (req, res) => {
  const { userId } = req.params;
  const data = await List.find({ user: userId });
  const { name, description, dueDate, status, color } = await data;
  res.json(data);
});

// @desc get a specific list from the user
// @route GET /api/users/:userId/lists/:listId
// @access Private
export const getList = expressAsyncHandler(async (req, res) => {
  const { listId } = req.params;
  res.json({ message: `Here is list number: ${listId}` });
});

// @desc create a new list for a user
// @route POST /api/users/:userId/lists
// @access Private
export const addList = expressAsyncHandler(async (req, res) => {
  const { userId } = req.params;
  const { user, name, description, dueDate, status, color } = req.body;
  const newList = await List.create({
    user,
    name,
    description,
    dueDate,
    status,
    color,
  });
  res.json(newList);
});

// @desc delete a list of a user
// @route DELETE /api/users/:userId/lists/:listId
// @access Private
export const deleteList = expressAsyncHandler(async (req, res) => {
  const { listId } = req.params;
  res.json({ message: `A list with id of ${listId} has been deleted` });
});

// @desc update a user's list
// @route PUT /api/users/:userId/lists/:listId
// @access Private
export const updateList = expressAsyncHandler(async (req, res) => {
  const { listId } = req.params;
  res.json({ message: `A list with id of ${listId} has been updated` });
});
