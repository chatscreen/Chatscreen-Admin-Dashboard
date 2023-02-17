const path = require("path");
const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");

connectDB();

const cors = require("cors");
const bodyParser = require("body-parser");

const io = require("socket.io")(5001, {
  cors: { origin: "http://localhost:3000" },
});

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  "/images/userImages",
  express.static(path.join("images", "userImages"))
);

io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("custom-event", (message) => {
    console.log(message);
    io.emit("recieve-message", "hi");
  });
});

app.use("/chat", require("./routes/chatRoutes"));
app.use("/locations", require("./routes/locationRoutes"));
app.use("/users", require("./routes/userRoutes"));

app.use(errorHandler);

app.listen(PORT, () =>
  console.log(`Server Running on Port: http://localhost:${PORT}`)
);
