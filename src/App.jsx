import React from 'react'
import { Routes, Route } from'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Header from './components/Header/Header'

import Categories from './components/Categories/Categories'
import Products from './components/Products/Products'
import NotFound from './components/NotFound/NotFound'
import CreateForm from './components/Create-Form/CreateForm'
import Footer from './components/Footer/Footer'
export default function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route exact path="/" element={<Header />} ></Route>
        <Route path="/Categories" element={<Categories />} ></Route>
        <Route path="/Products" element={<Products />} ></Route>
        <Route path="/CreateForm" element={<CreateForm />} ></Route>
        <Route path="*" element={<NotFound />} ></Route>
      </Routes>

      <Footer />
      
      </div>
  )
}
