require("dotenv").config();

require("./config/dbConfig");
const app = require("./app");
const ordersRoutes = require("./routes/v1/orders.route.js");
const webhooksRoutes = require("./routes/v1/webhooks.route.js");

// Routes
app.use("/api/v1/orders", ordersRoutes);
app.use("/api/v1/webhooks", webhooksRoutes);

// Global Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.all("*", (req, res) => {
  res.send("No Routes Found");
});
