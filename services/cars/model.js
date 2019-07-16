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
  }
};
