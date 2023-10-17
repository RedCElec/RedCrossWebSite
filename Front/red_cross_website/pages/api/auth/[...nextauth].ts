import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/prismadb";
import bcrypt from "bcrypt";
import GoogleProvider from "next-auth/providers/google"


//export const options:NextAuthOptions = ({
    export default NextAuth({
  providers: [
    GoogleProvider({
        id: "googleAuth",
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "email",
        },
        password: {
          label: "password",
          type: "password",
        },
        name: {
            label: "name",
            type: "name",
          },
      },
      authorize: async (credentials, req)=> {
        
        if (!credentials?.email || !credentials?.password) {
          return null;
          
        }
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user || !user?.password) {
            return null;
        }

        const isCorrectedPassword = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isCorrectedPassword) {
            return null;
        }
        return user;
      },
    }),
  ],
  pages: {
    signIn: "/authClient/loginPage",
    signOut: "/",
    error: "/",
  },
  callbacks: {
    session: async ({ session, token, user }) => {
      if (session?.user) {
        session.user.id = token.uid;
      }
      return session;
    },
    jwt: async ({ user, token }) => {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
});


