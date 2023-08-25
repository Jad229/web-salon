import User from "@models/user";
import { connectDB } from "@utils/database";
import { hash } from "bcrypt";
import Joi from "joi";
import { NextResponse } from "next/server";

const schema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  role: Joi.string().required(),
});

export const dynamic = "force-dynamic";

export async function POST(req) {
  await connectDB();

  const { firstName, lastName, email, password } = await req.json();

  //validate schema
  const { error } = schema.validate({ firstName, lastName, email, password });

  if (error) {
    return NextResponse.json({
      success: false,
      message: error.details[0],
    });
  }

  try {
    //Check if the user already exist
    const userAlreadyExists = await User.findOne({ email });

    if (userAlreadyExists) {
      return NextResponse.json({
        success: false,
        message: "User is already registered. Please try another email!",
      });
    } else {
      const hashedPassword = await hash(password, 12);

      const newUser = await User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        role: "client",
      });

      if (newUser) {
        return NextResponse.json({
          success: true,
          message: "Account registered successfully!",
        });
      }
    }
  } catch (error) {
    console.log("Error registering new user");
    return NextResponse.json({
      success: false,
      message: "Something went wrong! Please try again.",
    });
  }
}
