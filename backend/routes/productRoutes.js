import express from "express"
import { createProduct, deleteProduct, updateProduct } from "../controllers/productController.js"

const router = express.Router()

router.post("/", createProduct)
router.delete("/:productId", deleteProduct)
router.patch("/:productId", updateProduct)

export default router