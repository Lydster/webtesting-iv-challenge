const express = require("express");
const tarotCards = require("../tarot/tarotModel.js");
const server = express();
server.use(express.json());

server.get("/", async (req, res) => {
  res.status(200).json({ api: "up" });
});

server.get("/tarot", async (req, res) => {
  const rows = await tarotCards.getAll();
  res.status(200).json(rows);
});

module.exports = server;
