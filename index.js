const express = require("express");
const logins = require("./routes/logins");

const app = express();

app.use("/api/logins", logins);

app.get("/", (req, res) => {
  res.send("hello g I am running");
});

const port = process.env.PORT || 5000;
app.listen(port, console.log("hello hello dhola"));
