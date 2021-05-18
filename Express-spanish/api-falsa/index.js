require("dotenv").config();
const express = require("express");
const faker = require("faker");
const PORT = process.env.PORT;

const router = require("./api/routes/users");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extend: true }));

app.use("/", express.static("client"));
app.use("/api", require("./api"));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
