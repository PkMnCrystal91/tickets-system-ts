import { Request, Response } from "express";

import User from "../models/users";
import Purchase from "../models/purchases";

export const getAllUsers = async (req: Request, res: Response) => {
  const purchases = await User.findAll({
    include: [
      {
        model: Purchase,
        attributes: ["PurchaseDate", "TotalAmount"], // select the fields you want to include
      },
    ],
  });

  res.json(purchases);
};

export const getUserPurchase = async (req: Request, res: Response) => {
  const { id } = req.params;

  const purchases = await User.findAll({
    where: {
      id: id,
    },
    include: [
      {
        model: Purchase,
        attributes: ["PurchaseDate", "TotalAmount"], // select the fields you want to include
      },
    ],
  });

  res.json(purchases);
};
