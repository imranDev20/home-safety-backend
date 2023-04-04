const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

mongoose
  .connect(process.env.ATLAS_URI, {
    dbName: "hsc",
  })
  .then(() => {
    console.log("Database connection successfull");
  });
