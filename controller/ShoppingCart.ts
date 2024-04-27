import { Request, Response } from "express";
import { Op } from "sequelize";
import Product from "../models/products";
import ShoppingCart from "../models/ShoppingCart";

export const addToCart = async (req: Request, res: Response) => {
  const { body } = req;

  try {
    const videoGrame = await Product.findByPk(body.product_id);
    const cartItem = await ShoppingCart.create(body);

    res.status(200).json({
      msg: "Added to Cart!",
      cartItem,
      videoGrame,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};

export const deleteItemFromCart = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const cart = await ShoppingCart.findByPk(id);

    await cart?.destroy();

    res.status(200).json(cart);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};
