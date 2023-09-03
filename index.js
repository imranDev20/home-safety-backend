const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

require("./config/dbConfig");
const app = require("./app");
const ordersRoutes = require("./routes/v1/orders.route.js");
const webhooksController = require("./controller/webhooks.controller");

app.post(
  "/api/v1/webhooks/stripe",
  bodyParser.raw({ type: "application/json" }),
  webhooksController.stripeWebhook
);

app.use(express.json());

// Routes
app.use("/api/v1/orders", ordersRoutes);

// Global Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.all("*", (req, res) => {
  res.send("No Routes Found");
});
