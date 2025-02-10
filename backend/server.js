import express from "express"
import dotenv from "dotenv"

import connectDB from "./config/db.js"

dotenv.config()

const app = express()

const port = process.env.PORT || 3000

connectDB()
app.listen(port, () => console.log(`The server is listening on port ${port}`))