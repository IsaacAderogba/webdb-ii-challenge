
exports.up = function(knex) {
  return knex.schema.createTable('cars', table => {
    table.increments(); // primary key
    table.text('vin', 128).unique().notNullable();
    table.text('make', 128).notNullable();
    table.text('model', 128).notNullable();
    table.integer('mileage').notNullable();
    table.text('transmission_type', 128);
    table.text('status', 128);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
