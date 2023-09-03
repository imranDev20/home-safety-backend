const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("\x1b[1m\x1b[36m%s\x1b[0m", `App is running on port ${port}`);
});

module.exports = app;
