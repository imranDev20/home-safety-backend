const mongoose = require("mongoose");

const toolSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name for this Tool"],
      trim: true,
      unique: [true, "Name must be unique."],
      minLength: [3, "Name must be atleast 3 characters."],
      maxLength: [100, "Name is too large."],
    },
    description: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
      min: [0, "Price can't be negative"],
      validate: {
        validator: (value) => {
          const isInteger = Number.isInteger(value);

          if (isInteger) {
            return true;
          } else {
            return false;
          }
        },
      },
      message: "Quantity must be an integer",
    },

    unit: {
      type: String,
      required: true,
      enum: {
        values: ["kg", "litre", "pcs"],
      },
    },

    // categories: [
    //   {
    //     name: {
    //       type: String,
    //       required: true,
    //     },
    //     _id: mongoose.Schema.Types.ObjectId,
    //   },
    // ],
    // supplier: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Supplier",
    // },
  },
  { timestamp: true }
);

const Tool = mongoose.model("Tools", toolSchema);

module.exports = Tool;
