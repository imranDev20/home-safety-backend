const express = require("express");
const toolsController = require("../../controller/tools.controller");
const limiter = require("../../middleware/limiter");
const router = express.Router();

router
  .route("/")
  .get(toolsController.getAllTools)
  .post(toolsController.saveATool);

router
  .route("/:id")
  .get(toolsController.getToolDetail)
  .patch(toolsController.updateATool);

module.exports = router;
