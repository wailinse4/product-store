import express from "express"
import dotenv from "dotenv"
import helmet from "helmet"
import cors from "cors"
import morgan from "morgan"

import connectDB from "./config/db.js"

import productRoutes from "./routes/productRoutes.js"

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))

app.use("/api/products", productRoutes)

connectDB()
app.listen(port, () => console.log(`The server is listening on port ${port}`))