import express from "express"
import { createProduct, deleteProduct } from "../controllers/productController.js"

const router = express.Router()

router.post("/", createProduct)
router.delete("/:productId", deleteProduct)

export default router