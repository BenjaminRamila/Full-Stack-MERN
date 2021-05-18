const express = require("express");
const { route } = require("./users");
const router = express.Router();

router.use("/", (req, res) => {
  res.json({ status: "Test Successful" });
});

module.exports = router;
