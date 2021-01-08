const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Keys = require("./config/keys");

const app = express();
app.use(bodyParser.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello World! (from express)");
});

// API
const usersRoute = require("./routes/api/users");
app.use("/api/users", usersRoute);

// MongoDB connection (mongoose)
mongoose
  .connect(Keys.mongodbUri)
  .then((success) => console.log("Connected to Mongo DB."))
  .catch((erro) => console.error(`[Error] Mongo DB connection: `, err));

const port = process.env.PORT || 5000;
app.listen(
  port,
  () => {
    console.log(`server listening on port {port}`);
  },
  (err) => {
    console.error(err);
  }
);
