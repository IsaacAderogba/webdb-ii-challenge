const express = require("express");
const router = express.Router();
const controller = require("./controllers");
const { validateId, validateBody } = require("./middleware");

router.get("/cars", async (req, res, next) => {
  try {
    const car = await controller.getAllCars();
    res.status(200).json(car);
  } catch (err) {
    next(err);
  }
});

router.get("/cars/:id", validateId, async (req, res, next) => {
  try {
    const car = await controller.getCarsById(req.params.id);
    res.status(200).json(car);
  } catch (err) {
    next(err);
  }
});

router.post("/cars", validateBody, (req, res, next) => {
  try {
    res.json({ message: "Post New Car" });
  } catch (err) {
    next(err);
  }
});

router.put("/cars/:id", validateId, validateBody, (req, res, next) => {
  try {
    res.json({ message: "Update Car by ID" });
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
