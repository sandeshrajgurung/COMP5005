const express = require("express");
const mongoose = require("mongoose");
const Post = require("./models/post_model.js");
const postRoute = require("./routes/post_route.js");
const app = express();

app.use(express.json());

//routes
app.use("/api/posts", postRoute);

app.get("/", (req, res) => {
  res.send("Helo from node API Serverrr");
});

mongoose
  .connect(
    "mongodb+srv://admin:CftV7BWyolDUxNvl@backenddb.bzge4pc.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to database");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("connection failed");
  });
