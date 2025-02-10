import express from "express"
import dotenv from "dotenv"

import connectDB from "./config/db.js"

dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port = process.env.PORT || 3000

connectDB()
app.listen(port, () => console.log(`The server is listening on port ${port}`))