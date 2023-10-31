import {
  ChatUsers,
  CountEllipsis,
  CountNumber,
  UserCount,
  UserImg,
  ViewAll,
  ViewAllContainer,
} from "./ActiveUsersElements";

const ActiveUsers = ({ users }) => {
  {
    /*users is passed down all the way from App.js*/
  }
  {
    /*it only renders a max of 11 of the users, so they dont take up too much space, the correct number of users is always rendered*/
  }
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
