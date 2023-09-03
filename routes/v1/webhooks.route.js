const express = require("express");
const router = express.Router();
const webhooksController = require("../../controller/webhooks.controller");

// router.use(bodyParser.json());

router.post("/stripe", webhooksController.stripeWebhook);

module.exports = router;
