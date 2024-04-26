import { Request, Response } from "express";
import Product from "../models/products";

export const getAllProduct = async (req: Request, res: Response) => {
  const product = await Product.findAll();

  res.json(product);
};

export const getProductById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const product = await Product.findAll({
    where: {
      id: id,
    },
  });

  res.json(product);
};
