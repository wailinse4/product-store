import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const uri = process.env.MONGO_URI

const connectDB = async () => {
    try {
        await mongoose.connect(uri)
        console.log("MongoDB Connected")
    }
    catch(error) {
        console.log("MongoDB Connection Error")
    } 
    
}
export default connectDB