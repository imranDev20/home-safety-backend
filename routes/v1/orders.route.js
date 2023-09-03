const express = require("express");
const ordersController = require("../../controller/orders.controller");
const router = express.Router();

router
  .route("/create-checkout-session")
  .post(ordersController.createCheckoutSession);

module.exports = router;
