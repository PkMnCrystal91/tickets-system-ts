import { Request, Response } from "express";
import { Op } from "sequelize";
import { amountToPay } from "../helpers/amountToPay";

import User from "../models/users";
import Ticket from "../models/tickets";
import Purchase from "../models/purchases";

export const getAllPurchases = async (req: Request, res: Response) => {
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

  res.json({ purchases });
};

export const postPurchase = async (req: Request, res: Response) => {
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

    body.total_price = amountToPay(body.ticket_type_id, body.cantidad);

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
      msg: "Purchase ",
      purcahse,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};