const Cars = require('./model');

module.exports = {
  getAllAccounts: async function() {
    return await Cars.findAll();
  }
}