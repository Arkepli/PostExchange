const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json()); // To parse the incoming requests with JSON payloads
app.use(cors());  // To allow cross-origin requests

const db = require("./models");

const posts = require("./routes/Posts");
app.use("/posts", posts);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server is running on port 3001");
  });
});


