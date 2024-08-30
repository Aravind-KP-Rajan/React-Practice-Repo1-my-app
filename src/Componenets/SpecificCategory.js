import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

function SpecificCategory(){

  const { item } = useParams(); // Destructure item from URL params
  const [category, setProducts] = useState([]);

useEffect(() => {
  axios.get(`https://fakestoreapi.com/products/category/${item}`)
    .then(response => setProducts(response.data));
}, [item]);


  return(
    <div className="container mt-2 d-flex flex-wrap justify-content-center">
        {category.map(category => (
          <div key={category.id}>
      <div className="card border mt-2 align-items-center mx-1" style={{width: "18rem", minHeight: "30rem" }}>
        <img src={category.image} style={{ height: "300px", objectFit: "contain" }} className="mt-2 img-thumbnail rounded w-75" alt="images" />
        <div className="card-body">
          <h5 className="card-title" style={{
                    height: "3rem", 
                    overflow: "hidden",
                  }}>{category.title}</h5>
          <Link to={`/product/${category.id}`} className="btn btn-link">
                  View Details
                </Link>
          {/* <p className="card-text">{category.description}</p> */}
        </div>
        <ul className="list-group list-group-flush w-100">
          <li className="list-group-item">Price: ₹{category.price}</li>
          <li className="list-group-item">Ratings: {category.rating.rate} &#9733;</li>
          <li className="list-group-item">Count: {category.rating.count}</li>
        </ul>
        <div className="card-body d-flex justify-content-center">
          {/* <a href="/" className="btn btn-success">Buy now</a> */}
          {/* <a href="/" className="mx-1 btn btn-warning">Add to cart</a> */}
          <Link to={`/cart?productId=${category.id}`} className="btn btn-primary">Add to Cart</Link>

        </div>
      </div>
      </div>
      ))}
    </div>
  )
}

export default SpecificCategory;