import { Router } from "express";
import { getAllTickets } from "../controller/tickes";

const router = Router();

router.get("/", getAllTickets);

export default router;
