import { Request, Response } from "express";

import User from "../models/users";
import Purchase from "../models/purchases";
import ShoppingCart from "../models/ShoppingCart";
import Product from "../models/products";

export const getAllUsers = async (req: Request, res: Response) => {
  const purchases = await User.findAll({
    include: [
      {
        model: Purchase,
        attributes: ["id", "PurchaseDate", "TotalAmount"], // select the fields you want to include
      },
      {
        model: ShoppingCart,
        attributes: ["id", "product_id"],
      },
    ],
  });

  res.json(purchases);
};

export const getUserPurchase = async (req: Request, res: Response) => {
  const { id } = req.params;
  const purchase = await User.findAll({
    where: {
      id: id,
    },
    include: [
      {
        model: Purchase,
        attributes: ["PurchaseDate", "TotalAmount"], // select the fields you want to include
      },
      {
        model: ShoppingCart,
        attributes: ["id", "product_id"],
      },
    ],
  });
  /* const cartValue = purchase[0].dataValues.shoppingcarts; */

  console.log(purchase);
  /* const videoGame = await Product.findByPk(cartValue[0].dataValues.product_id); */
  res.status(200).json({
    purchase,
    /* videoGame, */
  });
};
