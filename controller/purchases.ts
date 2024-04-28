import { Request, Response } from "express";
import Purchase from "../models/purchases";
import ShoppingCart from "../models/ShoppingCart";
import Product from "../models/products";

export const postPurchase = async (req: Request, res: Response) => {
  const { body } = req;

  try {
    const cart = await ShoppingCart.findOne({
      where: {
        user_id: body.user_id,
      },
    });

    if (cart === null) {
      return res.status(400).json({
        msg: "Cart can't be empty: " + body.user_id,
      });
    }

    const product = await Product.findByPk(cart?.dataValues.product_id);

    body.TotalAmount = cart?.dataValues.quantity * product?.dataValues.price;

    const purcahse = await Purchase.create(body);

    await Product.decrement(
      { stock: cart?.dataValues.quantity },
      {
        where: {
          id: cart?.dataValues.product_id,
        },
      }
    );

    res.status(200).json({
      msg: "Thanks for your purchase!!",
      product,
      purcahse,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};
