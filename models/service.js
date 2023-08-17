import { Schema, model, models } from "mongoose";

const ServiceSchema = new Schema({
  name: {
    type: String,
    required: [true, "Service needs a name"],
  },
  price: {
    type: Number,
    required: [true, "Service needs a price"],
  },
  tag: {
    type: String,
    required: [true, "Service needs a type"],
  },
});

const Service = models.Service || model("Service", ServiceSchema);

export default Service;
