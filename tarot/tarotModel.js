const db = require("../data/dbConfig.js");
module.exports = {
  getAll,
  insert,
  deleteIt
};

function getAll() {
  return db("tarot");
}

async function insert(tarot) {
  const [id] = await db("tarot").insert(tarot);
  return db("tarot")
    .where({ id })
    .first();
}

function deleteIt(id) {
  return db("tarot")
    .where("id", id)
    .del();
}
