import React, { useState, useEffect, useRef } from "react";

import { io } from "socket.io-client";

import createMessagesList from "../../utils/createMessagesList";

import {
  MessageContainer,
  Message,
  AdminMessage,
  UserImage,
  SpeechBubble,
  AdminSpeechBubble,
  NameText,
  AdminNameText,
  CountEllipsis,
  SpeechBubbleTriangle,
  AdminSpeechBubbleTriangle,
  MessageText,
  AdminMessageText,
} from "./MessageElements";

// socket io is connected to the server through this route
const socket = io("http://localhost:5001");

// users is passed down from App.js, it is referenced to pair names and images with user messages
const Messages = ({ users }) => {
  useEffect(() => {
    socket.on("receive-message", () => {
      getChat();
    });
  }, []);

  const messagesEndRef = useRef(null);

  //automatically scrolls to bottom of the chat
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const [messageData, setMessageData] = useState([]);

  // get chat fetches all the messages
  const getChat = () => {
    const fetchData = async () => {
      try {
        let response = await fetch("http://localhost:5000/chat");
        let data = await response.json();
        setMessageData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  };

  // get chat is rendered whenever the page is rendered
  useEffect(getChat, []);

  // sorted messages (imported at top of page) takes the userData and the messageData, and sorts them into messages that contain both info (incuding images and names), it then sorts them by upload date

  const sortedMessages = createMessagesList(users, messageData);

  // scroll to bottom is triggered whenever getChat is called (whenever the page renders or the server is updated (using to socket io))
  useEffect(scrollToBottom, [getChat]);

  return (
    <MessageContainer>
      {/*if the messages name is "Admin", the message will be blue and to the right*/}
      {sortedMessages.map((message) =>
        message.name !== "Admin" ? (
          <Message key={message.timestamp}>
            <UserImage src={message.profileImg} />
            <SpeechBubble>
              <SpeechBubbleTriangle />
              <NameText>{message.name}</NameText>
              <MessageText>{message.message}</MessageText>
            </SpeechBubble>
            <CountEllipsis>...</CountEllipsis>
          </Message>
        ) : (
          <div key={message.timestamp}>
            <AdminMessage>
              <CountEllipsis>...</CountEllipsis>
              <AdminSpeechBubble>
                <AdminSpeechBubbleTriangle />
                <AdminNameText>{message.name}</AdminNameText>
                <AdminMessageText>{message.message}</AdminMessageText>
              </AdminSpeechBubble>
            </AdminMessage>
          </div>
        )
      )}
      <div ref={messagesEndRef} />
    </MessageContainer>
  );
};

export default Messages;
