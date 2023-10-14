import { useState, useEffect } from "react";
import ActiveUsers from "./components/ActiveUsers/ActiveUsers";
import Messages from "./components/Messages/Messages";
import InputMessage from "./components/InputMessage/InputMessage";
import { ChatContainer, ChatTitle, ChatHeader } from "./ChatElements";

const Chat = () => {
  // this userData is set automatically with the below fetch request

  const [userData, setUserData] = useState([]);

  //all user info from server, they are needed for both the ActiveUsers and Messages components
  //(mostly for profile images, number of users, etc)

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

  // userData from above is passed into Messages and Active users through props

  return (
    <ChatContainer>
      <ChatHeader>
        <ChatTitle>Chat</ChatTitle>
        <ActiveUsers users={userData} />
      </ChatHeader>
      <Messages users={userData} />
      <InputMessage />
    </ChatContainer>
  );
};

export default Chat;
