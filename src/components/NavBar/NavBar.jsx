import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <>
      <nav className="container navbar navbar-expand-lg navbar-light  fixed-top">
  <div className="container-fluid">
    <Link className="navbar-brand" to={"/"}>
      CRUD System
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent"> {/* Key change here */}
      <ul className="navbar-nav"> 
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"/"}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/Categories"}>
            Categories
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/Products"}>
            Products
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/CreateForm"}>
            Create Product
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/Contact"}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>


    </>
  )
}
