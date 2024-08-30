import React from "react";
import { Link } from "react-router-dom";

function Home(){

  return(
    <div>
      <div className="container my-5 bg-dark rounded-3 text-white">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1  text-white">Your One-Stop Shop for Fashion, Jewelry, and Electronics!"</h1>
            <p className="lead">"Discover a wide selection of high-quality products, including the latest in electronics, stunning jewelry, and stylish clothing for both men and women. Shop now for all your essentials and elevate your everyday look with ease!"</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">
                <Link to="/login" className="nav-link text-white">Login</Link></button>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">
              <Link to="/signup" className="nav-link text-white">Sign up</Link>
              </button>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img className=" img-bg rounded-5 mb-5" style={{ width:"900px", height:"100%"}} src="./../images/shoppingImage.jpg" alt="dress-pic" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
