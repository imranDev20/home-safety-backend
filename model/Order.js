const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    zipcode: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    services: [
      {
        serviceName: {
          type: String,
          required: true,
          trim: true,
        },
        serviceDescription: {
          type: String,
          trim: true,
        },
        servicePrice: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
