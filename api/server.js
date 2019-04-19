const express = require("express");
const { getAll, insert } = require("../tarot/tarotModel.js");
const server = express();
server.use(express.json());

server.get("/", async (req, res) => {
  res.status(200).json({ api: "up" });
});

server.get("/tarot", async (req, res) => {
  getAll()
    .then(tarot => {
      res.status(200).json(tarot);
    })
    .catch(error => {
      res.status(500).json({ error: "could not get tarot" });
    });
});

server.post("/tarot", (req, res) => {
  const { name, description } = req.body;
  insert({ name, description })
    .then(tarot => {
      res.status(200).json(tarot);
    })
    .catch(error => {
      res.status(500).json({ error: "could not add tarot" });
    });
});

module.exports = server;
