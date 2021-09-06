const mongoose = require("mongoose");

const url =
  "mongodb+srv://fslharoon:nokia5130@haaji.x0wcj.mongodb.net/loginsdb?retryWrites=true&w=majority";

mongoose
  .connect(url, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log("logins db connected");
  })
  .catch((err) => console.log(err));

module.exports = mongoose;
