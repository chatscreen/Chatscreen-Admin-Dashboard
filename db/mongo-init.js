print("mongo init start --------------------");

// put dummy data in separate files for better housekeeping

db.createCollection("locations");
db.createCollection("chats");
db.createCollection("users");

db.chat.insert([
  {
    _id: ObjectId("643c52af082d9b368ab97a65"),
    text: "hi im cool",
    sender: "643987a6ffa43719a5ee9b69",
    timestamp: "2023-04-16T19:55:27.924Z",
  },
  {
    _id: ObjectId("643c6299082d9b368ab97abf"),
    text: "hi im Jordan",
    sender: "643c5ef6082d9b368ab97a6d",
    timestamp: "2023-04-16T21:03:21.006Z",
  },
  {
    _id: ObjectId("643c62de082d9b368ab97ac3"),
    text: "hi im Nole, how is everone going tonight?",
    sender: "643c5ef6082d9b368ab97a6d",
    timestamp: "2023-04-16T21:04:30.907Z",
  },
  {
    _id: ObjectId("643c6333082d9b368ab97ac5"),
    text: "Great location, has anyone seen my phone? Its a black Iphone, left it my the pool table",
    sender: "643c5f06082d9b368ab97a73",
    timestamp: "2023-04-16T21:05:55.995Z",
  },
  {
    _id: ObjectId("643c6380082d9b368ab97ac7"),
    text: "I've been here heaps but never tried the Tropic Thunder coctail, highly reccomended",
    sender: "643c5f14082d9b368ab97a79",
    timestamp: "2023-04-16T21:07:12.572Z",
  },
  {
    _id: ObjectId("643c63cb082d9b368ab97ac9"),
    text: "Anyone keen on a game of pool? 2v2!",
    sender: "643c5f0f082d9b368ab97a76",
    timestamp: "2023-04-16T21:08:27.979Z",
  },
  {
    _id: ObjectId("643c6402082d9b368ab97acb"),
    text: "This place is rocks, thanks!",
    sender: "643c5f19082d9b368ab97a7c",
    timestamp: "2023-04-16T21:09:22.476Z",
  },
  {
    _id: ObjectId("643c646a082d9b368ab97acd"),
    text: "There is a huge storm coming, just letting everone know",
    sender: "643c5f26082d9b368ab97a7f",
    timestamp: "2023-04-16T21:11:06.232Z",
  },
  {
    _id: ObjectId("643c64bd082d9b368ab97acf"),
    text: "$7 pints of Heineken",
    sender: "643c5f2f082d9b368ab97a82",
    timestamp: "2023-04-16T21:12:29.621Z",
  },
  {
    _id: ObjectId("643c64fa082d9b368ab97ad1"),
    text: "I'm looking for a ride home to the CBD if anyones heading out that way, will chip in $10 for gas",
    sender: "643c5f38082d9b368ab97a85",
    timestamp: "2023-04-16T21:13:30.364Z",
  },
  {
    _id: ObjectId("643c651a082d9b368ab97ad3"),
    text: "What time does this place close?",
    sender: "643c5f3c082d9b368ab97a88",
    timestamp: "2023-04-16T21:14:02.954Z",
  },
  {
    _id: ObjectId("643c6553082d9b368ab97ad5"),
    text: "Songs here are Bangers!",
    sender: "643c5f40082d9b368ab97a8b",
    timestamp: "2023-04-16T21:14:59.061Z",
  },
  {
    _id: ObjectId("643c6589082d9b368ab97ad7"),
    text: "Can the staff turn up the volume on the cricket match please?",
    sender: "643c5f4e082d9b368ab97a8e",
    timestamp: "2023-04-16T21:15:53.433Z",
  },
  {
    _id: ObjectId("643c65b0082d9b368ab97ad9"),
    text: "Go the Black Caps!",
    sender: "643c5f51082d9b368ab97a91",
    timestamp: "2023-04-16T21:16:32.255Z",
  },
  {
    _id: ObjectId("643c65d5082d9b368ab97adb"),
    text: "Hi everone! Cool app!",
    sender: "643c5f55082d9b368ab97a94",
    timestamp: "2023-04-16T21:17:09.246Z",
  },
  {
    _id: ObjectId("643c6618082d9b368ab97add"),
    text: "I'm on TV lol",
    sender: "643c5f5c082d9b368ab97a97",
    timestamp: "2023-04-16T21:18:16.247Z",
  },
  {
    _id: ObjectId("643c6641082d9b368ab97adf"),
    text: "I'm heading home everone, thanks for the amazing night",
    sender: "643c5fc2082d9b368ab97ab8",
    timestamp: "2023-04-16T21:18:57.660Z",
  },
  {
    _id: ObjectId("643c666f082d9b368ab97ae1"),
    text: "I found a phone 021 293 9394, call me :)",
    sender: "643c5f99082d9b368ab97aac",
    timestamp: "2023-04-16T21:19:43.917Z",
  },
  {
    _id: ObjectId("643c71b4082d9b368ab97af0"),
    text: "Hope everyone has had a great night, we will be closing soon! Last drinks!!",
    sender: "643c6771082d9b368ab97ae6",
    timestamp: "2023-04-16T22:07:48.531Z",
  },
]);

db.locations.insert({
  name: "Dummies Bar and Grill",
});

db.users.insert([
  {
    roles: {
      User: 2001,
    },
    _id: ObjectId("643c5ef6082d9b368ab97a6d"),
    username: "Jordan",
    password: "$2b$10$4NHctUtIESEOjOtg6obVw.yV2lOdd.FdVKBU2w4udKgI3Znvkifga",
    isAvatarImageSet: false,
    avatarImage: "",
  },
  {
    roles: {
      User: 2001,
    },
    _id: ObjectId("643c5eff082d9b368ab97a70"),
    username: "Nole",
    password: "$2b$10$GFKrvpjvWpSRsgS.xbWdVex30YtZVXJhMGhoJl.9qNJV1tdm5Zkkq",
    isAvatarImageSet: false,
    avatarImage: "",
  },
  {
    roles: {
      User: 2001,
    },
    _id: ObjectId("643c5f06082d9b368ab97a73"),
    username: "Brian",
    password: "$2b$10$bIcO3VoDmA6xPfOlRZqp4.1mjYe/rbFjnzc2uuDYOLhGvbosh.QDS",
    isAvatarImageSet: false,
    avatarImage: "",
  },
  {
    roles: {
      User: 2001,
    },
    _id: ObjectId("643c5f0f082d9b368ab97a76"),
    username: "Melonie",
    password: "$2b$10$NlhAHMvaMYZjc1h6DABqlO1bCSxmbTEeX.zt9s2kDBQoVrBU6gmrq",
    isAvatarImageSet: false,
    avatarImage: "",
  },
  {
    roles: {
      User: 2001,
    },
    _id: ObjectId("643c5f14082d9b368ab97a79"),
    username: "Sasha",
    password: "$2b$10$U29RnfqR2E2e4oKwkVUyW.E/j8.JcKui4VYFfMpz7VZQvQ0npY94e",
    isAvatarImageSet: false,
    avatarImage: "",
  },
  {
    roles: {
      User: 2001,
    },
    _id: ObjectId("643c5f19082d9b368ab97a7c"),
    username: "Joseph",
    password: "$2b$10$hkssIDmg0K0G8cijxXDFaeZw/aRkC.AblnjypTHbq6979nDPLn.QS",
    isAvatarImageSet: false,
    avatarImage: "",
  },
  {
    roles: {
      User: 2001,
    },
    _id: ObjectId("643c5f26082d9b368ab97a7f"),
    username: "Vaugn",
    password: "$2b$10$/iVvt42afYpjyU3CDI4teOTzIdDpAJSY5KCECPJbdQzi3VZIyJb2u",
    isAvatarImageSet: false,
    avatarImage: "",
  },
  {
    roles: {
      User: 2001,
    },
    _id: ObjectId("643c5f2f082d9b368ab97a82"),
    username: "Kelly",
    password: "$2b$10$Z5y.upVKbyDzB8oZKqw5t.2q43M28oJae3kw.FKOSErwoWER/xLim",
    isAvatarImageSet: false,
    avatarImage: "",
  },
  {
    roles: {
      User: 2001,
    },
    _id: ObjectId("643c5f38082d9b368ab97a85"),
    username: "Ken",
    password: "$2b$10$cCNTm7wVHlvapAc7N4jR9uPJb641e2hriJqZ3.lygSfvlukc2ydP6",
    isAvatarImageSet: false,
    avatarImage: "",
  },
  {
    roles: {
      User: 2001,
    },
    _id: ObjectId("643c5f3c082d9b368ab97a88"),
    username: "Sophie",
    password: "$2b$10$ODGgM3p3/DGZofkgMEj6.u46t8xyW6KR557babDmzILvLly0KEgJW",
    isAvatarImageSet: false,
    avatarImage: "",
  },
  {
    roles: {
      User: 2001,
    },
    _id: ObjectId("643c5f40082d9b368ab97a8b"),
    username: "Sam",
    password: "$2b$10$HgUvZespQ.KYzgH/yjbgAeXEVVZulL4WR/iGSKC1dsOd.SfyWJDre",
    isAvatarImageSet: false,
    avatarImage: "",
  },
  {
    roles: {
      User: 2001,
    },
    _id: ObjectId("643c5f4e082d9b368ab97a8e"),
    username: "Ryan",
    password: "$2b$10$1yN01hdp708imBlHC3nmxeES4fwWzGGZTAR5Y2x1Sxiq/ve1vqvla",
    isAvatarImageSet: false,
    avatarImage: "",
  },
  {
    roles: {
      User: 2001,
    },
    _id: ObjectId("643c5f51082d9b368ab97a91"),
    username: "Robert",
    password: "$2b$10$2H7jUdc0zVWWG3Dq8R2/LOfGPeHZWDaXjI4PL6qDx/1Qd5s.kTjGK",
    isAvatarImageSet: false,
    avatarImage: "",
  },
  {
    roles: {
      User: 2001,
    },
    _id: ObjectId("643c5f55082d9b368ab97a94"),
    username: "Daniel",
    password: "$2b$10$3BFOgUZJUJk/fmvstD2iTe6ctlpYDbQcV6RbiwYLfUqmar54JWzgy",
    isAvatarImageSet: false,
    avatarImage: "",
  },
  {
    roles: {
      User: 2001,
    },
    _id: ObjectId("643c5f5c082d9b368ab97a97"),
    username: "Chris",
    password: "$2b$10$TC432TXDeZGVLgc3DwePnOgQP9Ys92NYKaaf0VnFbUO9v.FkCp2gW",
    isAvatarImageSet: false,
    avatarImage: "",
  },
  {
    roles: {
      User: 2001,
    },
    _id: ObjectId("643c5f61082d9b368ab97a9a"),
    username: "Adam",
    password: "$2b$10$2V5xV8o8RqC33XzUo3p9e.1s3I4/4KdoiACRVwOPUwqbfMY6nrRye",
    isAvatarImageSet: false,
    avatarImage: "",
  },
  {
    roles: {
      User: 2001,
    },
    _id: ObjectId("643c5f79082d9b368ab97a9d"),
    username: "George",
    password: "$2b$10$VlHideUjKrYalBFh6M2QMOEbreAzWksOTNoBdeFkLsJEJgqqrP6cm",
    isAvatarImageSet: false,
    avatarImage: "",
  },
  {
    roles: {
      User: 2001,
    },
    _id: ObjectId("643c5f7e082d9b368ab97aa0"),
    username: "Tony",
    password: "$2b$10$m/Cx8rjXVzzFJJV/mbV82Oh4P35tz8K8u0iXamKm.bTOMueRsHkHK",
    isAvatarImageSet: false,
    avatarImage: "",
  },
  {
    roles: {
      User: 2001,
    },
    _id: ObjectId("643c5f84082d9b368ab97aa3"),
    username: "Stuart",
    password: "$2b$10$uD0EqHdY82LcUEcg679.2eq/JaA3kwIBvul.I/F55xuZaw3nPxL26",
    isAvatarImageSet: false,
    avatarImage: "",
  },
  {
    roles: {
      User: 2001,
    },
    _id: ObjectId("643c5f8c082d9b368ab97aa6"),
    username: "Dani",
    password: "$2b$10$Nmfm2.QzZAGILSJgAxmTsO90wutgbIWVyvR7guybcfzBc4vNoiFyu",
    isAvatarImageSet: false,
    avatarImage: "",
  },
  {
    roles: {
      User: 2001,
    },
    _id: ObjectId("643c5f92082d9b368ab97aa9"),
    username: "Morgan",
    password: "$2b$10$Wdrdl7bTXlRyAPGatIaoouTooLdNNfyo7AhoSefjpx/TA5HUhqqG6",
    isAvatarImageSet: false,
    avatarImage: "",
  },
  {
    roles: {
      User: 2001,
    },
    _id: ObjectId("643c5f99082d9b368ab97aac"),
    username: "Rhyse",
    password: "$2b$10$LDglqLSVNNNlS.xqG5edNOkgm2kl2U.rNFm53ByLnDcd1gBdtSRuK",
    isAvatarImageSet: false,
    avatarImage: "",
  },
  {
    roles: {
      User: 2001,
    },
    _id: ObjectId("643c5f9d082d9b368ab97aaf"),
    username: "Scott",
    password: "$2b$10$RWbRJOTdYe8SkhE8/ZKsGu9CruTMFR2cuKmV5rcR6N77SA6efqKdq",
    isAvatarImageSet: false,
    avatarImage: "",
  },
  {
    roles: {
      User: 2001,
    },
    _id: ObjectId("643c5fa1082d9b368ab97ab2"),
    username: "Jason",
    password: "$2b$10$wRZK/NwDxeGtFz.ftQlt7OId586WMewnk9hffO5T1044ZJ71E3CE.",
    isAvatarImageSet: false,
    avatarImage: "",
  },
  {
    roles: {
      User: 2001,
    },
    _id: ObjectId("643c5fbe082d9b368ab97ab5"),
    username: "Aiden",
    password: "$2b$10$HMt2IN1GcL59sPiNQuHhw.xsii6jmlWez3qCQfou.JYoQukgWQxw6",
    isAvatarImageSet: false,
    avatarImage: "",
  },
  {
    roles: {
      User: 2001,
    },
    _id: ObjectId("643c5fc2082d9b368ab97ab8"),
    username: "Craig",
    password: "$2b$10$ctCnD6nWHb/xUjvR4.pxI.0J4ec784oQNAHqHUvNDU/DNMbdCpJw6",
    isAvatarImageSet: false,
    avatarImage: "",
    refreshToken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkNyYWlnIiwiaWF0IjoxNjgxNjc4Mjc5LCJleHAiOjE2ODE3NjQ2Nzl9.3O5WjcDArJHESnv58Ayoj3jfvGI_RBtfOpalPn9xPsk",
  },
  {
    roles: {
      User: 2001,
      Admin: 5150,
    },
    _id: ObjectId("643c6771082d9b368ab97ae6"),
    username: "Admin",
    password: "$2b$10$O/UdfV1h7cB99O7au1rFPOJHRj.j5mYmUegLfWpqg1CWufobfix3i",
    isAvatarImageSet: false,
    avatarImage: "",
    refreshToken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkFkbWluIiwiaWF0IjoxNjgxNjgyNDg4LCJleHAiOjE2ODE3Njg4ODh9.rGOozYhlHj9rMVz2okE7bgZ0Knj1xeWlHMNVLRson6M",
  },
]);

print("mongo init end --------------------");
