const asyncHandler = require("express-async-handler");

const Chat = require("../models/chatModel");
// Define the database URL to connect to.
// returns all stories that have Bob's id as their author.

const Location = require("../models/locationModel");
//instead of try catch, I'm wrapping everything in express-async-handler

// moved this to chat controller

const io = require("socket.io")(5001, {
  cors: { origin: "http://localhost:3000" },
});

const getMessages = asyncHandler(async (req, res) => {
  const chat = await Chat.find();

  res.status(200).json(chat);
});
// working !!!
// executed when message is sent from the client
// io.on("connection", (socket) => {
//   console.log(socket.id);
//   socket.on("custom-event", (message) => {
//     console.log(message);
//     Chat.updateOne(
//       { name: "Admin" },
//       { message: message },
//       function (err, docs) {
//         if (err) {
//           console.log(err);
//         } else {
//           console.log("Updated Docs : ", docs);
//         }
//       }
//     );

io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("custom-event", (message) => {
    const messageText = message.message;
    const chat = Chat.find();
    // Chat.findOne({ name: "Admin" });
    // console.log(user);
    Chat.updateOne(
      { name: "Admin" },
      { $push: { mesages: { message: messageText, timestamp: "039286" } } },

      // { message: message },
      function (err, docs) {
        if (err) {
          console.log(err);
        } else {
          console.log("Updated Docs : ", docs);
        }
      }
    );
    // console.log(user);
    // Append items to `friends`
    // user.push(message);

    // Update document
    // user.save();
    // const user = Chat.findOne({ name: "Admin" });

    // Append items to `friends`
    // console.log(user.message); // Update document

    // user.save(message);
    io.emit("recieve-message", "hi");
  });
});

// db.chats.insert([
//   {
//     name: "Admin",
//     image: "https://randomuser.me/api/portraits/women/81.jpg",
//     mesages: [
//       {
//         message: "Consectetur eos commodi voluptas",
//         timestamp: "383949",
//       },
//       {
//         message: "Adipisicing quas sapiente nihil magni doloribus rerum",
//         timestamp: "393490",
//       },
//     ],
//   },
// ]);

const createMessage = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please provide a text");
  }

  const message = {
    // id: req.body.id,
    // email: req.body.email,
    name: req.body.name,
    date: new Date().getTime(),
    text: req.body.text,
  };

  // return all the chat users
  // find by id and add the message to the database
  // const userData = await Chat.find(message.name);
  // console.log(userData);
  // await Chat.create(message);
  // res.status(200).json(message);
  // const userMessages = await Chat.find(message.name);
  // let name = message.name;
  // const userMessages = await Chat.findOne({ name });
  // console.log(userMessages);
  // await Chat.updateOne({ name: message.name }, { push: { mesages: message } });
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
