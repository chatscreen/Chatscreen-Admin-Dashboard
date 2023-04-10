const Messages = require("../models/chatModel");

//receive all messages from the database
const getMessages = async (req, res) => {
  try {
    const chat = await Messages.find();
    res.status(200).json(chat);
  } catch (error) {
    console.log(error.message);
  }
};

//add a new message to the database
const createMessage = async (req, res) => {
  try {
    const { sender, text } = req.body;
    console.log(req.body);
    const sentMessage = await Messages.create({
      text,
      sender,
    });
    res.status(201).json(`Message added successfully: ${sentMessage}`);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { getMessages, createMessage };
