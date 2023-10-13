import { useState, useEffect } from "react";
import {
  ChatUsers,
  UserImg,
  ViewAllContainer,
  UserCount,
  CountNumber,
  CountEllipsis,
  ViewAll,
} from "./ActiveUsersElements";

const ActiveUsers = () => {
  const [userData, setUserData] = useState([]);

  // need to fetch all user images from server
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch("http://localhost:5000/users/");
        let data = await response.json();
        console.log(data);
        console.log("hi from fetch uses");
        setUserData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <ChatUsers style={{ display: "flex" }}>
      {userData.slice(0, 11).map((user) => (
        <UserImg key={user._id} src={user.image} alt={"user"} />
      ))}
      <ViewAllContainer>
        <UserCount>
          <CountNumber>{userData.length}</CountNumber>
          <CountEllipsis>....</CountEllipsis>
        </UserCount>
        <ViewAll>View all</ViewAll>
      </ViewAllContainer>
    </ChatUsers>
  );
};

export default ActiveUsers;
