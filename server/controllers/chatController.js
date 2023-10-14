const asyncHandler = require("express-async-handler");
const Chat = require("../models/chatModel");

// opens up a socket io route 5001
const io = require("socket.io")(5001, {
  cors: { origin: "http://localhost:3000" },
});

// get all messages
const getMessages = asyncHandler(async (req, res) => {
  const chat = await Chat.find();
  res.status(200).json(chat);
});

// create message
// this listens for a socket connection in 5001 called 'custom-event' (it can be found in client 'Messages' component)
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
      io.emit("receive-message"); // emit the event to the client, this tells the clients to fetch the chat again,
    } catch (error) {
      console.log(error);
    }
  });
});

module.exports = { getMessages };
