const createMessagesList = (result) => {
  let messagesList = [];
  for (let i = 0; i < result.length; i++) {
    let userName = result[i].name;
    let profileImg = result[i].image;
    for (let j = 0; j < result[i].mesages.length; j++) {
      messagesList.push({
        name: userName,
        message: result[i].mesages[j],
        timestamp: result[i].mesages[j].timestamp,
        profileImg: profileImg,
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
