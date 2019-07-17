const faker = require("faker");

const createFakeCar = () => ({
  vin: faker.random.uuid(),
  make: faker.lorem.words(),
  model: faker.lorem.words(),
  mileage: faker.random.number(),
  transmission_type: faker.lorem.words(),
  status: faker.lorem.words(),
})

exports.seed = async function(knex) {
  const fakeCars = [];
  const numberOfCars = 20;

  for (let i = 0; i < numberOfCars; i++) {
    fakeCars.push(createFakeCar());
  }
  await knex('cars').insert(fakeCars);
};
