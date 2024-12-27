import React from 'react'
import './Header.css'
import About from '../About/About'
import ProductLimt from '../Products/ProductLimt.jsx'



export default function Header() {
  return (
    <>

    <div className="container">


      <div className="d-flex vh-100 justify-content-center align-items-center">
        <header className="text-center">
          <div className="header__container">
            <h1 className="header__title">Welcome to Free Syria</h1>
            <p className="header__subtitle">Free Syria, New Syria, Ancient Syria, Heritage Syria, Umayyad Syria, Syria of the people of the heavenly religions</p>
          </div>
        </header>


      </div>
      <About />
      <ProductLimt />
      </div>

    </>
  )
}
