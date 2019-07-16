const Cars = require('./model');

module.exports = {
  getAllCars: async function() {
    return await Cars.findAll();
  },
  getCarsById: async function(id) {
    return await Cars.findCarById(id)
  },
  postNewCar: async function(car) {
    return await Cars.insert(car);
  }
}