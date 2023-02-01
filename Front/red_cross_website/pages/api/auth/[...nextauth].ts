
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../../prisma/prisma";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";


export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),

    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password" },
      },

      authorize: async (credentials, req) => {
        // Add logic here to look up the user from the credentials supplied
        //const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
        const dbUser = await prisma.user.findUnique({
          where: {
            email: credentials.username
          }
        })
        //console.log(dbUser);

        const passwordFromCred = credentials.password
        const checkPassword = await bcrypt.compare(passwordFromCred, dbUser.password);

        if (checkPassword) {
          return dbUser
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null
        }
      }
    })

  ],
  pages: {
    signIn: '/',
    signOut: '/',
  },
  session: { strategy: "jwt" },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true
    }
  },
})

