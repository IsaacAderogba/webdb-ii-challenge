const db = require("../../data/dbConfig");
const TABLE = "cars";

module.exports = {
  findAll: function() {
    return db(TABLE);
  },
  findCarById: function(id) {
    return db(TABLE)
      .where({ id })
      .first();
  },
  insert: function(car) {
    return db(TABLE)
      .insert(car)
      .then(([id]) => this.findCarById(id));
  },
  update: function(id, car) {
    return db(TABLE)
      .where({ id })
      .update(car)
      .then(count => (count > 0 ? this.findCarById(id) : null));
  },
  remove: function(id) {
    return db(TABLE)
      .where({ id })
      .del();
  }
};
