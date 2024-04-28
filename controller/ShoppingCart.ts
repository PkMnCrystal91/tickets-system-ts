import { Request, Response } from "express";
import { Op } from "sequelize";
import Product from "../models/products";
import ShoppingCart from "../models/ShoppingCart";
import User from "../models/users";

export const addToCart = async (req: Request, res: Response) => {
  const { body } = req;

  try {
    const videoGamne = await Product.findOne({
      where: {
        id: body.product_id,
      },
    });

    const noInStock = await Product.findAll({
      where: {
        id: body.product_id,
        stock: {
          [Op.gte]: body.quantity,
        },
      },
    });

    const user = await User.findOne({
      where: {
        id: body.user_id,
      },
    });

    if (videoGamne === null) {
      return res.status(400).json({
        msg: "Videogame does not exist with id: " + body.product_id,
      });
    }

    if (noInStock.length === 0) {
      return res.status(400).json({
        msg: `No ${body.quantity} aviable in stock`,
      });
    }

    if (user === null) {
      return res.status(400).json({
        msg: "User game does not exist with id: " + body.user_id,
      });
    }

    const cartItem = await ShoppingCart.create(body);

    res.status(200).json({
      msg: "Added to Cart!",
      cartItem,
      videoGamne,
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
