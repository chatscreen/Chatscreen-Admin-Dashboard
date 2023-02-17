import React from "react";
import ActiveUsers from "./components/ActiveUsers/ActiveUsers";
import Messages from "./components/Messages/Messages";
import InputMessage from "./components/InputMessage/InputMessage";

import { ChatContainer, ChatTitle, ChatHeader } from "./ChatElements";

const Chat = () => {
  return (
    <ChatContainer>
      <ChatHeader>
        <ChatTitle>Chat</ChatTitle>
        <ActiveUsers />
      </ChatHeader>
      <Messages />
      <InputMessage />
    </ChatContainer>
  );
};

export default Chat;
