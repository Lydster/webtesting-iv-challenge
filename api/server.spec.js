const db = require("../data/dbConfig");
const tarotdb = require("../tarot/tarotModel.js");
const server = require("./server");
const request = require("supertest");

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
  describe("get", () => {
    it("should return 200 status", () => {
      return request(server)
        .get("/tarot")
        .then(res => {
          console.log(res);
          expect(res.status).toBe(200);
        });
    });
    it("should return JSON", async () => {
      const res = await request(server).get("/tarot");
      expect(res.type).toBe("application/json");
    });
  });
  describe("delete", () => {
    it("should return 200 status", () => {
      return request(server)
        .delete("/tarot/:id")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
  });
});
