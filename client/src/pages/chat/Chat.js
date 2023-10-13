import { useState, useEffect } from "react";
import ActiveUsers from "./components/ActiveUsers/ActiveUsers";
import Messages from "./components/Messages/Messages";
import InputMessage from "./components/InputMessage/InputMessage";
import { ChatContainer, ChatTitle, ChatHeader } from "./ChatElements";

const Chat = () => {
  //need to fetch all user data
  const [userData, setUserData] = useState([]);

  //need to fetch all user images from server
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch("http://localhost:5000/users/");
        let data = await response.json();
        setUserData(data.users);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <ChatContainer>
      <ChatHeader>
        <ChatTitle>Chat</ChatTitle>
        <ActiveUsers users={userData} />
      </ChatHeader>
      <Messages users={userData} />
    </ChatContainer>
  );
};

export default Chat;
//return (
//<ChatContainer>
//<ChatHeader>
//<ActiveUsers userData={userData}/>
//</ChatHeader>
//<InputMessage />
//</ChatContainer>
//);
