import prisma from "@/prismadb";
import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
    if (req.method === 'POST') {

    const body = req.body
    const { email, password, name } = body;
    console.log(body)
    const hashedPassword = await bcrypt.hash(password, 12);

    try {
      const user = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          name,
        } 
      })

      return res.status(200).json(user);
    } 
    catch {
      
      return res.status(500).json("error");
    }
  }
}
