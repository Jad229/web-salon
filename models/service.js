import { Schema, model, models } from "mongoose";

const serviceSchema = new Schema({
  name: {
    type: String,
    required: [true, "Service needs a name"],
  },
  price: {
    type: Number,
    required: [true, "Service needs a price"],
  },
  type: {
    type: String,
    required: [true, "Service needs a type"],
  },
});

const Service = model.Service || models("Service", serviceSchema);

export default Service;
