/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("waves", (table) => {
    table.increments();
    table.integer("class_id");
    table.integer("wave");
    table.timestamp("created_at").nullable();
    table.integer("created_by");
    table.timestamp("updated_at").nullable();
    table.integer("updated_by");
    table.timestamp("deleted_at").nullable();
    table.integer("deleted_by");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("waves");
};
