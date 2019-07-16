/* eslint-disable require-atomic-updates */
const Cars = require("./model");

module.exports = {
  validateId: async function(req, res, next) {
    const { id } = req.params;
    if (Number.isInteger(parseInt(id, 10))) {
      try {
        const car = await Cars.findCarById(id);
        if (car) {
          req.car = car;
          next();
        } else {
          res
            .status(404)
            .json({ message: `The car with Id of '${id}' does not exist` });
        }
      } catch (err) {
        next(err);
      }
    } else {
      res.status(400).json({ message: `The Id of '${id}' is not valid` });
    }
  },
  validateBody: function(req, res, next) {
    const { vin, make, model, mileage, transmission_type, status } = req.body;

    if (!vin || !make || !model || !mileage)
      res
        .status(400)
        .json({
          message: "Missing required fields: vin, make, model, mileage"
        });

    req.newCar = { vin, make, model, mileage, transmission_type, status };
    next();
  }
};
