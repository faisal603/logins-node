const { Mongoose } = require("./connect");
const con = require("./connect");

const mydata = [];

const loginschema = con.Schema({
  name: String,
  postfix: String,
  url: String,
});

const Log = con.model("logins", loginschema);

async function adder() {
  for (let m of mydata) {
    const logins = new Log({
      name: m.name,
      postfix: m.postfix,
      url: m.url,
    });
    const result = await logins.save();
    console.log(result);
  }
}

async function getdata() {
  const res = await Log.find();
  return res;
}

async function getone(myurl) {
  const res = await Log.findOne({ url: myurl });
  return res;
}

module.exports.getdata = getdata;
module.exports.getone = getone;
