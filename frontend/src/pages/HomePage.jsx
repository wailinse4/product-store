import React from 'react'
import { useEffect } from "react"
import { useProductStore } from "../store/useProductStore.js"

import { PlusSquareIcon, RefreshCwIcon } from 'lucide-react'

const HomePage = () => {
  const { products, loading, error, fetchProducts } = useProductStore()
  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  console.log(products)

  return (
    <main className="max-w-6xl mx-auto px-4 py-8 ">
      <div className="flex justify-between items-center mb-8">
        <button className="btn btn-primary">
          <PlusSquareIcon className="size-5 mr-2" />
          Add Product
        </button>
        
        <button>
          <RefreshCwIcon className="size-5" onClick={fetchProducts}/>
        </button>
      </div>

      {error && <div className="alert alert-error mb-8">{error}</div>}
    </main>
  )
}

export default HomePage
