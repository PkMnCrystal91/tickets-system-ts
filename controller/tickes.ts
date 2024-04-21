import { Request, Response } from "express";
import Ticket from "../models/tickets";

export const getAllTickets = async (req: Request, res: Response) => {
  const tickets = await Ticket.findAll();

  res.json({ tickets });
};
