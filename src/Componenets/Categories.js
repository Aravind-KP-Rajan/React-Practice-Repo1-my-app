import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

function Categories() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/categories')
      .then(response => response.data)
      .then(data => {
        setCategories(data); 
        setIsLoading(false);  
      })
      .catch(() => {
        setIsLoading(false); 
      });
  }, []);

  if (isLoading) {
    return <button class="btn btn-primary mt-5 " type="button" disabled>
    <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
    <span  role="status"> Fetching details for you...</span>
  </button>; 
  }

  return (
    <div className="container mt-4 d-flex flex-wrap justify-content-center " >
       {categories.map((item,index) => (
        <div key={index}> 
          <div className="card mx-1 mt-2" style={{width: "16rem"}}>
          <img src={`./../images/${item}.jpg`} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{item}</h5>
            <Link to={`/category/${item}`} className="btn btn-primary">{item}</Link>
          </div>
        </div>
      </div>
      ))}
    </div>
  )
}

export default Categories;





// const CategoryPage = () => {
//   const { item } = useParams(); // Destructure item from URL params
//   const [products, setProducts] = useState([]);

// useEffect(() => {
//   axios.get(`https://fakestoreapi.com/products/category/${item}`)
//     .then(response => setProducts(response.data));
// }, [item]);