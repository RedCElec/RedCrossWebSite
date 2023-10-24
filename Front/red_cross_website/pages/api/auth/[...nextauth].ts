import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/prismadb";
import bcrypt from "bcrypt";
import GoogleProvider from "next-auth/providers/google"


export const options:NextAuthOptions = ({
    
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
          label: "Email",
          type: "email",
        },
        password: {
          label: "Password",
          type: "password",
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
    // session: async ({ session, token, user }) => {
      
    //   if (session?.user) {
    //     session.user.id = token.uid;
    //   }
    //   return session;
    // },
    // jwt: async ({ user, token }) => {
    //   if (user) {
    //     token.uid = user.id;
        
    //   }
    //   return token;
    // },
    async jwt({ user , token }) {
      if (user) {  // Note that this if condition is needed
        token.user={...user}
      }
      return token
     },
    async session({ session, token }) {
      if (token?.user) { // Note that this if condition is needed
        session.user = token.user;
      }
      return session
    },
  },
  session: {
    strategy: "jwt",
    //maxAge: 1 * 24 * 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
});


export default NextAuth(options);

