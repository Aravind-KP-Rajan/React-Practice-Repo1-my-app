import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AllProducts(){

  const[products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
    .then (response => response.data)
    .then (data => setProducts(data));
  }, []);

  return(
    <div>
      <div className="container mt-3 d-flex flex-wrap justify-content-center">
        {products.map(allProducts => (
          <div key={allProducts.id} className="d-flex">
            <div className="card border align-items-center mx-4 my-2 d-flex flex-column" style={{ width: "18rem", minHeight: "30rem" }}>
              <img src={allProducts.image} className="mt-2 img-thumbnail rounded" style={{ width: "150px", height: "200px", objectFit: "contain" }} alt="..." />
              <div className="card-body d-flex flex-column justify-content-between text-center">
                <h5 className="card-title" style={{
                    height: "3rem", 
                    overflow: "hidden",
                  }}>{allProducts.title}</h5>

                <Link to={`/product/${allProducts.id}`} className="btn btn-link">
                  View Details
                </Link>


                {/* <p className="card-text">{allProducts.description}</p> */}
              </div>
              <ul className="list-group list-group-flush w-100">
                <li className="list-group-item">Price: ₹{allProducts.price}</li>
                <li className="list-group-item">Ratings: {allProducts.rating.rate} &#9733;</li>
                <li className="list-group-item">Count: {allProducts.rating.count}</li>
              </ul>
              <div className="card-body d-flex justify-content-center">
                {/* <a href="/" className="btn btn-success">Buy now</a> */}
                <Link to={`/cart?productId=${allProducts.id}`} className="btn btn-primary">Add to Cart</Link>
                {/* <a href="/" className="mx-1 btn btn-warning">Add to cart</a> */}
              </div>
            </div>
        </div>
        ))}
    </div>
    </div>
  )

}

export default AllProducts;