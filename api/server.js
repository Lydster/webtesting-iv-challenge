const express = require("express");
const { getAll, insert, deleteIt } = require("../tarot/tarotModel.js");
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

server.delete("/tarot/:id", (req, res) => {
  const id = req.params.id;
  deleteIt(id)
    .then(tarot => {
      res.status(200).json({ message: "Successfully deleted" });
    })
    .catch(error => {
      res.status(500).json({ error: "Could not delete from server" });
    });
});

module.exports = server;
