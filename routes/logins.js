const express = require("express");
const db = require("../db/loginsdb");

const router = express.Router();

router.get("/", async (req, res) => {
  const result = await db.getdata();
  res.send(result);
});
router.get("/:url", async (req, res) => {
  const myurl = req.params.url;
  const result = await db.getone(`${myurl}`);
  res.send(result);
});

module.exports = router;
