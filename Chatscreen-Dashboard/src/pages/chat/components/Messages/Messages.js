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

const socket = io("http://localhost:5001");

// eventually, this data recieved will be the updated chat data
socket.on("recieve-message", (message) => {
  alert(message);
});

const Messages = () => {
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const [messageData, setMessageData] = useState([]);

  const getUsers = () => {
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

  useEffect(getUsers, []);

  const sortedMessages = createMessagesList(messageData);
  useEffect(scrollToBottom, [sortedMessages]);

  return (
    <MessageContainer>
      {sortedMessages.map((message) =>
        message.name !== "Admin" ? (
          <Message key={message.timestamp}>
            <UserImage src={message.profileImg} />
            <SpeechBubble>
              <SpeechBubbleTriangle />
              <NameText>{message.name}</NameText>
              <MessageText>{message.message.message}</MessageText>
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
                <AdminMessageText>{message.message.message}</AdminMessageText>
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
