const express = require("express");
const router = express.Router();
const controller = require("./controllers");
const { validateId, validateBody } = require("./middleware");

router.get("/cars", async (req, res, next) => {
  try {
    const cars = await controller.getAllCars();
    res.status(200).json(cars);
  } catch (err) {
    next(err);
  }
});

router.get("/cars/:id", validateId, async (req, res, next) => {
  try {
    res.status(200).json(req.car);
  } catch (err) {
    next(err);
  }
});

router.post("/cars", validateBody, async (req, res, next) => {
  try {
    const newCar = await controller.postNewCar(req.newCar);
    res.status(201).json(newCar);
  } catch (err) {
    next(err);
  }
});

router.put("/cars/:id", validateId, validateBody, async (req, res, next) => {
  try {
    const updatedCar = await controller.updateCar(req.params.id, req.newCar);
    res.status(200).json(updatedCar);
  } catch (err) {
    next(err);
  }
});

router.delete("/cars/:id", validateId, (req, res, next) => {
  try {
    res.json({ message: "Delete Car by ID" });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
