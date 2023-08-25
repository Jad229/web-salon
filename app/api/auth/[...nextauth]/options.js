import User from "@models/user";
import { connectDB } from "@utils/database";
import { compare } from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";

export const options = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials) {
        await connectDB();

        const { email, password } = credentials;

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
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    // Called before session
    jwt: ({ token, user }) => {
      if (user) {
        return {
          ...token,
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          role: user.role,
        };
      }
      return token;
    },
    // Called after jwt
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          firstName: token.firstName,
          lastName: token.lastName,
          role: token.role,
        },
      };
    },
    async redirect({ url, baseUrl }) {
      return "/";
    },
  },

  pages: {
    signIn: "/login",
  },
};
