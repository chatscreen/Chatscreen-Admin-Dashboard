const asyncHandler = require("express-async-handler");
const Chat = require("../models/chatModel");

const io = require("socket.io")(5001, {
  cors: { origin: "http://localhost:3000" },
});

const getMessages = asyncHandler(async (req, res) => {
  const chat = await Chat.find();

  res.status(200).json(chat);
});

io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("custom-event", (message) => {
    const messageText = message.message;

    Chat.updateOne(
      { name: "Admin" },
      {
        $push: {
          mesages: {
            message: messageText,
            timestamp: new Date().getTime(),
          },
        },
      },

      function (err, docs) {
        if (err) {
          console.log(err);
        } else {
          console.log("Updated Docs : ", docs);
        }
      }
    );
    io.emit("recieve-message", "hi");
  });
});

const createMessage = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please provide a text");
  }

  const message = {
    name: req.body.name,
    date: new Date().getTime(),
    text: req.body.text,
  };

  console.log("hi there");
  const user = await Chat.findOne({ name: admin });

  // Append items to `friends`
  user.mesages.push(message);

  // Update document
  await user.save();
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
