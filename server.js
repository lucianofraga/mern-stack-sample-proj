const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Routes
app.get("/", (req, res)=>{

    res.send("Hello World! (from express)")
});

// API
const usersRoute = require("./routes/api/users")
app.use("/api/users", usersRoute);

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
