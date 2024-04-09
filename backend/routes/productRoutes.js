import express from "express";
import {
  getProduct,
  getProductbyId,
} from "../controllers/productController.js";
const router = express.Router();

router.route("/").get(getProduct);
router.route("/:id").get(getProductbyId);

export default router;
