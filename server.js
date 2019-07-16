const express = require("express");
const server = express();

server.use(express.json());

server.get("/", (req, res, next) => {
  res.send(`<h2>WebDb-II-Challenge</h2>`);
});

server.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = server;
