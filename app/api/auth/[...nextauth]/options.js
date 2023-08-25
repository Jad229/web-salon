import User from "@models/user";
import { connectDB } from "@utils/database";
import { compare } from "bcrypt";
import Joi from "joi";
import CredentialsProvider from "next-auth/providers/credentials";

const schema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const options = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials) {
        await connectDB();

        const { email, password } = credentials;

        //validate schema
        const { error } = schema.validate({ email, password });

        if (error) {
          return null;
        }

        try {
          const user = await User.findOne({ email });

          //check if user exists
          if (!user) {
            return null;
          }
          const checkPassword = await compare(password, user.password);

          if (!checkPassword) {
            return null;
          }

          return user;
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
};
