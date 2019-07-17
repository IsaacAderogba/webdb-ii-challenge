exports.up = function(knex) {
  return knex.schema.createTable("sales", table => {
    table.increments(); // primary key
    table.integer("sales").notNullable();
    table
      .integer("cars_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("cars");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("sales");
};
