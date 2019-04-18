exports.seed = function(knex, Promise) {
  return knex("tarot").insert([
    {
      id: 1,
      name: "Tower",
      description: "world turned upside down. A very uncomfortable situation"
    },
    { id: 2, name: "Sun", description: "Extremely good fortune." },
    {
      id: 3,
      name: "Moon",
      description: "you gonna be eral creeped out over here with this one."
    }
  ]);
};
