import React from 'react'
import { useEffect } from "react"
import { useProductStore } from "../store/useProductStore.js"

const HomePage = () => {
  const { products, loading, error, fetchProducts } = useProductStore()
  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  console.log(products)

  return (<div>Home Page</div>)
}

export default HomePage
