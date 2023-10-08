import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './containers/Header'
import ProductList from './containers/ProductList'
import ProductComponent from './containers/ProductComponent'
import ProductDetails from './containers/ProductDetails'

const Routing = () => {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
    </Routes>
    </BrowserRouter>
  )
}

export default Routing