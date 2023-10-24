import prisma from "@/prismadb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const body = await req.body;
    const { productId, userId } = body;

    try {
      const existingCartItem = await prisma.cart.findFirst({
        where: {
          productId,
          userId,
        },
      });

      if (existingCartItem) {
        await prisma.cart.delete({
          where: {
            id: existingCartItem.id,
          },
        });
      }

      const product = await prisma.cart
        .create({
          data: {
            productId,
            userId,
          },
        })
        .then((e) => console.log(e, "write"));

      return res.status(200).json(product);
    } catch (error) {
      console.log("Error adding product to cart", error);
      return res.status(400).json(error);
    }
  }
}
