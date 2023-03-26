import { Request, Response } from "express";
import { prisma } from "../database/prisma";

export const createProduct = async (req: Request, res: Response) => {
  const { name, price, amount } = req.body;

  const {storeId} = req.params;

  const Productes = await prisma.product.create({
    data: { name, price, amount, Store:{
      connect:{
        id: storeId,
      }
    } },
  });
  return res.json(Productes);
};


export const getAllAcesseses = async (req: Request, res: Response) =>{
  const Productes = await prisma.product.findMany()
  
  return res.json(Productes);
}