import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from "next-auth/providers/credentials"
import connectMongo from '../../../libs/mongooseConnect'
import User from '../../../libs/authModel'
import bcrypt from "bcryptjs"

export default NextAuth ({
  providers: [
    GoogleProvider({
      
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
      
    }),
    
    CredentialsProvider({
      name: 'Credentials',
      async authorize(credentials, req){
        connectMongo().catch(error=> {error: 'cest pas bon'})
        //console.log(credentials?.email)
        const result = await User.findOne({email: credentials?.email})
        if(!result){
          throw new Error("no user Found");
        } 
        

        //checkPassword
        const passwordFromCred: any = credentials?.password
        const checkPassword = await bcrypt.compare(passwordFromCred, result?.password);

        if(!checkPassword || result.email !== credentials?.email){
          throw new Error("Username & password doesn't match")
        }
        return result;
      }
    })
    
    // Passwordless / email sign in
    
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true
    }
  },
  pages: {
    signIn: '/',
    signOut: '/',
  }
  })


