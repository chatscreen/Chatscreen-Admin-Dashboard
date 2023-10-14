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
  socket.on("custom-event", async (text, sender) => {
    try {
      if (!text || !sender) {
        throw new Error("Please provide both text and sender");
      }
      const newChatMessage = new Chat({
        text,
        sender,
      });
      await newChatMessage.save();
      io.emit("receive-message"); // Emit the event only to the sender
    } catch (error) {
      console.log(error);
    }
  });
});

module.exports = { getMessages };
