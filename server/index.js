const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json()); // To parse the incoming requests with JSON payloads
app.use(cors()); // To allow cross-origin requests

const db = require("./models");

const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);

const commentsRouter = require("./routes/Comments");
app.use("/comments", commentsRouter);

const usersRouter = require("./routes/Users");
app.use("/auth", usersRouter);

const likesRouter = require("./routes/Likes");
app.use("/likes", likesRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server is running on port 3001");
  });
});
