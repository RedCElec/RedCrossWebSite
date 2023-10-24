import prisma from "@/prismadb";
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse){

    if(req.method === 'DELETE'){

    const body = await req.body
    const {productId, userId} = body

    try{
        const deleteCart = await prisma.cart.deleteMany({
            where:{
                productId,
                userId
            }
        })

        return res.status(200).json(deleteCart)
    }
    catch(error){
        return res.status(500).json(error)
    }


}
}