import { Router } from "express";
import { postPurchase } from "../controller/purchases";

const router = Router();

// Rutas para las funciones logicas de nuestro controlador
/* router.get("/", getAllPurchases); */
router.post("/", postPurchase);

export default router;
