const asyncHandler = require("express-async-handler");
const Chat = require("../models/chatModel");

// this is the socket that connects to the client
const io = require("socket.io")(5001, {
  cors: { origin: "http://localhost:3000" },
});

// get all messages from the chat
const getMessages = asyncHandler(async (req, res) => {
  const chat = await Chat.find();
  res.status(200).json(chat);
});

// create a message
io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("custom-event", (message) => {
    const messageText = message.message;
    Chat.updateOne(
      // name should be dynamic
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

// delete message

module.exports = { getMessages };
