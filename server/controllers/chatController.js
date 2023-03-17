const Messages = require("../models/chatModel");

//receive all messages from the database
const getMessages = async (req, res) => {
  try {
    const chat = await Chat.find();
    res.status(200).json(chat);
  } catch (error) {
    console.log(error.message);
  }
};

//add a new message to the database
const createMessage = async (req, res) => {
  try {
    const { from, message } = req.body;
    const sentMessage = await Messages.create({
      message: { text: message },
      sender: from,
    });
    res.status(201).json(`Message added successfully: ${sentMessage}`);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { getMessages, createMessage };
