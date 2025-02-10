import { create } from "zustand"

const BASE_URL = "http://localhost:3000"

export const useProductStore = create((set, get) => ({
    products: [], 
    loading: false, 
    error: null, 
}))