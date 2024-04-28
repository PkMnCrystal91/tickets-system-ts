import { Request, Response } from "express";
import Purchase from "../models/purchases";
import ShoppingCart from "../models/ShoppingCart";
import Product from "../models/products";

/* export const getAllPurchases = async (req: Request, res: Response) => {
  const purchases = await Purchase.findAll({
    include: [
      {
        model: User,
        attributes: ["email", "full_name"], // select the fields you want to include
      },
      {
        model: Ticket,
        attributes: ["nombre", "precio"], // select the fields you want to include
      },
    ],
  });

  res.json(purchases);
}; */

/* export const postPurchase = async (req: Request, res: Response) => {
  const { body } = req;

  try {
    if (body.cantidad === 0) {
      return res.status(400).json({
        msg: `Tiene que ingresar compra por 1 o mas tickets`,
      });
    }

    const noTickets = await Ticket.findAll({
      where: {
        id: body.ticket_type_id,
        cantidad_disponible: {
          [Op.gte]: body.cantidad,
        },
      },
    });

    if (noTickets.length === 0) {
      return res.status(400).json({
        msg: `No ${body.cantidad} tickets aviable`,
      });
    }

    body.total_price = noTickets[0].dataValues.precio * body.cantidad;

    const purcahse = await Purchase.create(body);

    await Ticket.decrement(
      { cantidad_disponible: body.cantidad },
      {
        where: {
          id: body.ticket_type_id,
        },
      }
    );

    res.status(200).json({
      purcahse,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
}; */

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
