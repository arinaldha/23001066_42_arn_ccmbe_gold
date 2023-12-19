/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("levels").del();
  await knex("levels").insert([
    { id: 1, name: "Silver" },
    { id: 2, name: "Gold" },
    { id: 3, name: "Platinum" },
  ]);
};
