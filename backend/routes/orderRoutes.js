import express from "express";
const router = express.Router();
import {
  addOrderItems,
  getOrderById,
  getMyOrders,
  getOrders,
  updateOrderToDelevired,
} from "../controllers/orderController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.get("/", protect, admin, getOrders);
router.post("/", protect, addOrderItems);
router.get("/myorders", protect, getMyOrders);
router.get("/:id", protect, getOrderById);
router.put("/:id/deliver", protect, admin, updateOrderToDelevired);

export default router;
