import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/prisma";
import bcrypt from 'bcryptjs'


export default async function handle(req: NextApiRequest,res: NextApiResponse,) {
  
  if (req.method === "POST") {
    await handlePOST(res, req);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`,
    );
  }
}

const hashPassword =  (password: string) => {

    const hashpass = bcrypt.hash(password, 12).then(result =>{
    //console.log(result);
    return result;
    })
    .catch(Error);

    return hashpass;
    
};

const hashPhone = (phone: string) => {
    const hashThing = bcrypt.hash(phone, 6)
    .then(result =>{
      return result;
    })
    .catch(Error);
    return hashThing;
}

// POST /api/user
async function handlePOST(res, req) {
  
  const user = await prisma.user.create({
    data: {email: req.body.email, 
      password: await hashPassword(req.body.password),
      firstname: req.body.firstname,
      lastname: req.body.lastname,   
      phone: await hashPassword(req.body.phone)},
  });
  
  res.json(user);
}