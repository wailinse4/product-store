import express from "express"
import dotenv from "dotenv"

import connectDB from "./config/db.js"

import productRoutes from "./routes/productRoutes.js"

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/products", productRoutes)

connectDB()
app.listen(port, () => console.log(`The server is listening on port ${port}`))