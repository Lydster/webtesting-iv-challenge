const db = require("../data/dbConfig");
const tarotdb = require("../tarot/tarotModel.js");

describe("tarot model", () => {
  describe("insert", () => {
    afterEach(async () => {
      await db("tarot").truncate();
    });
    it("should insert provided cards into db", async () => {
      await tarotdb.insert({ name: "Death", description: "death" });
      await tarotdb.insert({
        name: "Magician",
        description: "mystical stuff"
      });
      const tarotcards = await db("tarot");
      expect(tarotcards).toHaveLength(2);
    });
    it("should insert the provided tarot into db", async () => {
      let tarot = await tarotdb.insert({ name: "Death", description: "death" });
      expect(tarot.name).toBe("Death");
      expect(tarot.description).toBe("death");
    });
  });
});
