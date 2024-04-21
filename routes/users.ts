import { Router } from "express";
import { getAllUsers, getUserPurchase } from "../controller/users";

const router = Router();

router.get("/", getAllUsers);
router.get("/:id", getUserPurchase);

export default router;
