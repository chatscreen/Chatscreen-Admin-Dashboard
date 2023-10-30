const createMessagesList = (users, messageData) => {
  let messagesList = [];
  // creates a mapping object for messages
  // the users and the messageData are from 2 different mongodb collections, so they have to be called seperately and joined
  // after that they are orderd by date of upload
  for (let i = 0; i < messageData.length; i++) {
    const senderId = messageData[i].sender;
    const user = users.find((user) => user._id === senderId);
    if (user) {
      messagesList.push({
        name: user.username,
        message: messageData[i].text,
        timestamp: messageData[i].timestamp,
        profileImg: user.avatarImage,
      });
    }
  }
  const sortByTime = messagesList.sort((a, b) => {
    if (b.timestamp > a.timestamp) {
      return -1;
    } else {
      return 1;
    }
  });
  return sortByTime;
};
export default createMessagesList;
