import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "User needs a first name"],
  },
  lastName: {
    type: String,
    required: [true, "User needs a last name"],
  },
  email: {
    type: String,
    required: [true, "User needs a name"],
  },
  password: {
    type: String,
    required: [true, "User needs a name"],
  },
});
