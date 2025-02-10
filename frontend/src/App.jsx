import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar.jsx"

import HomePage from "./pages/HomePage.jsx"
import ProductPage from "./pages/ProductPage.jsx"

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/product/:id" element={<ProductPage />}></Route>
      </Routes>
    </div>
  )
}
export default App