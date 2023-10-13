//import { useState, useEffect } from "react";
import {
  ChatUsers,
  UserImg,
  ViewAllContainer,
  UserCount,
  CountNumber,
  CountEllipsis,
  ViewAll,
} from "./ActiveUsersElements";

const ActiveUsers = ({ users }) => {
  return (
    <ChatUsers style={{ display: "flex" }}>
      {users.slice(0, 11).map((user) => (
        <UserImg key={user._id} src={user.avatarImage} alt={user._id} />
      ))}
      <ViewAllContainer>
        <UserCount>
          <CountNumber>{users.length}</CountNumber>
          <CountEllipsis>....</CountEllipsis>
        </UserCount>
        <ViewAll>View all</ViewAll>
      </ViewAllContainer>
    </ChatUsers>
  );
};

export default ActiveUsers;
