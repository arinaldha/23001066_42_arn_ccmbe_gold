/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    {
      id: 1,
      name: "user1",
      email: "user1@gmail.com",
      password: "123",
      role_id: 1,
    },
    {
      id: 2,
      name: "user2",
      email: "user2@gmail.com",
      password: "123",
      role_id: 2,
    },
  ]);
};
