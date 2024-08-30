import React, {useState, useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function SpecificProduct() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.data)
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="container mt-4">
      
      <div className="card mx-auto" style={{ width: "24rem" }}>
        <img
          src={product.image}
          className="card-img-top"
          alt={product.title}
          style={{ height: "300px", objectFit: "contain" }}
        />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Price: ₹{product.price}</li>
          <li className="list-group-item">Category: {product.category}</li>
          <li className="list-group-item">
            Ratings: {product.rating.rate} &#9733; ({product.rating.count} reviews)
          </li>
        </ul>
        <div className="card-body d-flex justify-content-center">
          {/* <a href="/" className="btn btn-success">
            Buy now
          </a> */}
          {/* <a href="/" className="mx-1 btn btn-warning">
            Add to cart
          </a> */}
        `<Link to={`/cart?productId=${product.id}`} className="btn btn-primary">Add to Cart</Link>

        </div>
      </div>
    </div>
  );
}

export default SpecificProduct;