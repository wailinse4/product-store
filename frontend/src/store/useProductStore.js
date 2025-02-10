import { create } from "zustand"
import axios from "axios"

const BASE_URL = "http://localhost:3000"

export const useProductStore = create((set, get) => ({
    products: [], 
    loading: false, 
    error: null, 

    fetchProducts: async () => {
        set({ loading: true, error: null })

        try {
            const response = await axios.get(`${BASE_URL}/api/products`)
            set({ products: response.data.data, error: null }) // response.data? 
        }
        catch(error) {
            set({ error: error.message })
        }
        finally {
            set({ loading: false })
        }
    },

    deleteProduct: async (productId) => {
        console.log(productId);
        set({ loading: true });
        try {
          await axios.delete(`${BASE_URL}/api/products/${productId}`);
          set((prev) => ({ products: prev.products.filter((product) => product._id !== productId) }));
        } 
        catch (error) {
            set({ error: error.message })
        } 
        finally {
          set({ loading: false });
        }
      },
    
}))