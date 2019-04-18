const db = require("../data/dbConfig.js");
module.exports = {
  getAll
};

function getAll() {
  return db("tarot");
}
