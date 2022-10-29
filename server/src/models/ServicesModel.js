const mongoose = require("mongoose");

// users schema

const dataServicesSchema = mongoose.Schema(
  {
    Name: { type: String },
    price: { type: Number },
    slots: [{ type: String, required: true }],
  },
  { versionKey: false }
);

const ServicesModel = mongoose.model("services", dataServicesSchema);

module.exports = ServicesModel;
