import { Router } from "express";
import { getAllProduct, getProductById } from "../controller/products";

const router = Router();

router.get("/", getAllProduct);
router.get("/:id", getProductById);

export default router;
