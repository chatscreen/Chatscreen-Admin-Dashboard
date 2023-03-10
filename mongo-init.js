// put scripts here for mongo db premade databases
require("dotenv").config();

print("mongo init start --------------------");

const pms = db.getSiblingDB(process.env.MONGODB_DATABASE);

pms.createUser({
  user: process.env.MONGODB_USERNAME,
  pwd: process.env.MONGODB_PASSWORD,
  roles: [
    {
      role: "readWrite",
      db: process.env.MONGODB_DATABASE,
    },
  ],
});

print("mongo init end --------------------");
