import express from "express"
import { createProduct, deleteProduct, updateProduct, getProducts } from "../controllers/productController.js"

const router = express.Router()

router.post("/", createProduct)
router.delete("/:productId", deleteProduct)
router.patch("/:productId", updateProduct)
router.get("/", getProducts)

export default router