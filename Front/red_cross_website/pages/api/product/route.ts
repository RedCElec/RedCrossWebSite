import prisma from '@/prismadb'
import { NextApiRequest } from 'next';
import { NextApiResponse } from 'next';
import { NextResponse } from "next/server";

export default async function handler(request: NextApiRequest, response:NextApiResponse){

    if (request.method === 'POST') {
    const dataArr = await request.body

    const {
        title,
        description,
        category,
        price,
        image,
        userId,
        rating,
        height,
        width,

    } = dataArr

    try{
        const createProduct = await prisma.product.create({
            data: {
                title,
                description,
                category,
                price,
                image,
                userId,
                rating,
                height,
                width,
            }
        })
        return response.status(200).json(createProduct)
    }catch(error){
        console.log("Error updating product", error)
        return response.status(401).json(error)
    }

    }
}