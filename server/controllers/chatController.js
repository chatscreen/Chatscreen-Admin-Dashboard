const asyncHandler = require("express-async-handler");

const Chat = require("../models/chatModel");
// Define the database URL to connect to.
// returns all stories that have Bob's id as their author.

const Location = require("../models/locationModel");
//instead of try catch, I'm wrapping everything in express-async-handler

const getMessages = asyncHandler(async (req, res) => {
  const chat = await Chat.find();
  res.status(200).json(chat);
});

const createMessage = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please provide a text");
  }

  const message = {
    message: {
      id: req.body.id,
      email: req.body.email,
      name: req.body.name,
      text: req.body.text,
    },
  };

  await Chat.create(message);
  res.status(200).json(message);
});

const editMessage = asyncHandler(async (req, res) => {
  const chat = await Chat.findById(req.params.id);
  if (!chat) {
    res.status(404);
    throw new Error("Chat not found");
  }

  const updateChat = await Chat.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updateChat);
});

const deleteMessage = asyncHandler(async (req, res) => {
  const chat = await Chat.findById(req.params.id);

  if (!chat) {
    res.status(404);
    throw new Error("Chat not found");
  }
  await chat.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = { getMessages, createMessage, editMessage, deleteMessage };
