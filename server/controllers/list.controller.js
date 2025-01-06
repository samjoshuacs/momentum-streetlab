// imports
import expressAsyncHandler from "express-async-handler";

// @desc get all lists from the user
// @route GET /api/lists/:id
// @access Private
export const getLists = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  res.json({ message: `Here are the lists of user with id: ${id}` });
});

// @desc get a specific list from the user
// @route GET /api/lists/:id/target/:id
// @access Private
export const getList = expressAsyncHandler(async (req, res) => {
  const { lid } = req.params;
  res.json({ message: `Here is list number: ${lid}` });
});

// @desc create a new list for a user
// @route POST /api/lists/:id
// @access Private
export const addList = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  res.json({ message: `A new list has been created for user with id: ${id}` });
});

// @desc delete a list of a user
// @route DELETE /api/lists/:id/target/:lid
// @access Private
export const deleteList = expressAsyncHandler(async (req, res) => {
  const { lid } = req.params;
  res.json({ message: `A list with id of ${lid} has been deleted` });
});

// @desc update a user's list
// @route PUT /api/lists/:id/target/:lid
// @access Private
export const updateList = expressAsyncHandler(async (req, res) => {
  const { lid } = req.params;
  res.json({ message: `A list with id of ${lid} has been updated` });
});
