const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.get('/cars', async (req, res, next) => {
  try {
    const accounts = await controller.getAllAccounts();
    res.status(200).json(accounts);
  } catch (err) {
    next(err);
  }
})

module.exports = router;