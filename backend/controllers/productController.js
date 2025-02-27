import Product from "../models/Product.js"

export const createProduct = async (req, res) => {
    const { name, price, image } = req.body

    try {
        if(!name || !price || !image) {
            return res.status(400).json({ message: "All fields are required" })
        }

        const newProduct = await Product.create({ name, price, image }) 
        res.status(201).json({ message: "Product Created", data: newProduct })
    }
    catch(error) {
        console.error(error)
        res.status(500).json({ message: "Internal Server Error" })
    }
}

export const deleteProduct = async (req, res) => {
    const { productId } = req.params

    try {
        await Product.findByIdAndDelete(productId)
        res.status(200).json({ message: "Product Deleted" })
    }
    catch(error) {
        console.error(error)
        res.status(500).json({ message: "Internal Server Error" })
    } 
}

export const updateProduct = async (req, res) => {
    const { productId } = req.params
    const { name, price, image } = req.body

    try {
        const updatedProduct = await Product.findByIdAndUpdate(productId, { name, price, image }, { new: true })
        res.status(200).json({ message: "Product Updated", data: updatedProduct })
    }
    catch(error) {
        console.error(error)
        res.status(500).json({ message: "Internal Server Error" })
    }  
}

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json({ message: "Products Found", data: products })
    }
    catch(error) {
        console.error(error)
        res.status(500).json({ message: "Internal Server Error" })
    }
}