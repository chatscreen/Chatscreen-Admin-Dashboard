const createMessagesList = (messageData, users) => {
  // need to fetch all user images from server

  let messagesList = [];
  for (let i = 0; i < messageData.length; i++) {
    messagesList.push({
      name: "bob",
      message: "hi im cool",
      timestamp: "2398394",
      profileImg: "https://randomuser.me/api/portraits/men/99.jpg",
    });
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
