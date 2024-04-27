import { Router } from "express";
import { addToCart, deleteItemFromCart } from "../controller/ShoppingCart";

const router = Router();

router.post("/", addToCart);
router.delete("/:id", deleteItemFromCart);

export default router;
