import React from "react";
import { Link } from "react-router-dom";

function Header(){

  return(
    <div className="bg-dark">
      <div className="container " >
        <header className="d-flex justify-content-center py-3 " >
          <ul className="nav nav-pills">
            <li className="nav-item "><Link to="/" className="nav-link text-white " aria-current="page">Home</Link></li>
            <li className="nav-item "><Link to="/categories" className="nav-link text-white">Categories</Link></li>
            <li className="nav-item"><Link to="/allProducts" className="nav-link text-white">All Products</Link></li>
            <li className="nav-item"><Link to="/Faq's" className="nav-link text-white">FAQs</Link></li>
            <li className="nav-item"><Link to="/About" className="nav-link text-white">About</Link></li>
          </ul>
        </header>
      </div>
    </div>
  )
}

export default Header;