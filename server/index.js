const express = require("express");
const app = express();
const db = require("./models");
app.use(express.json()); // To parse the incoming requests with JSON payloads

const posts = require("./routes/Posts");
app.use("/posts", posts);


db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server is running on port 3001");
  });
});


