import React from 'react'
import { Routes, Route } from'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Header from './components/Header/Header'

import Categories from './components/Categories/Categories'
import Products from './components/Products/Products'
import Product from './components/Product/Product'
import NotFound from './components/NotFound/NotFound'
import CreateForm from './components/Create-Form/CreateForm'
import Footer from './components/Footer/Footer'
export default function App() {
  return (
    <>
      <NavBar />
      <div style={{ paddingTop: '56px' }}>
      
      </div>
      <Routes>
        <Route exact path="/" element={<Header />} ></Route>
        <Route path="/Categories" element={<Categories />} ></Route>
        <Route path="/CreateForm" element={<CreateForm />} ></Route>
        <Route path="/Products" element={<Products />} ></Route>
        <Route path="/Product/:id" element={<Product />} ></Route>
        <Route path="*" element={<NotFound />} ></Route>
      </Routes>

      <Footer />
      
      </>
  )
}
