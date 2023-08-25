import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    role: String,
  },
  { timestamps: true }
);

const User = models.User || model("User", UserSchema);

export default User;
