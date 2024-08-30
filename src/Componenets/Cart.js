import React, { useEffect, useState, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

function Cart() {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get('productId');
  const [cart, setCart] = useState(() => {
    // Retrieve cart from localStorage when component is mounted
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const productAdded = useRef(false);

  useEffect(() => {
    // Check if a product is selected, it's not already in the cart, and it hasn't been added in this session
    if (productId && !cart.some(item => item.id === parseInt(productId)) && !productAdded.current) {
      productAdded.current = true; // Set flag to prevent further additions of the same product
      axios.get(`https://fakestoreapi.com/products/${productId}`)
        .then(response => {
          const productData = response.data;
          Swal.fire('Success', 'Product added to cart!', 'success');
          const updatedCart = [...cart, productData];
          setCart(updatedCart); // Update cart state
          localStorage.setItem('cart', JSON.stringify(updatedCart)); // Save updated cart to localStorage
        })
        .catch(() => {
          Swal.fire('Error', 'Failed to add product to cart!', 'error');
        });
    }
  }, [productId, cart]);

  const handlePlaceOrder = () => {
    Swal.fire('Order Placed', 'Your order has been placed successfully!', 'success');
    localStorage.removeItem('cart'); // Clear cart after placing order
    setCart([]); // Clear cart state
  };

  return (
    <div className="container">
      <h3>Your Cart</h3>
      {cart.length > 0 ? (
        cart.map((item, index) => (
          <div key={index}>
            <div className="container mt-4">
              <div className="card mx-auto" style={{ width: "24rem" }}>
                {item.image && (
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.title}
                    style={{ height: "300px", objectFit: "contain" }}
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{item.title || 'Product Title'}</h5>
                  <p className="card-text">{item.description || 'Product Description'}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Price: ₹{item.price || 'N/A'}</li>
                  <li className="list-group-item">Category: {item.category || 'N/A'}</li>
                  <li className="list-group-item">
                    Ratings: {item.rating ? item.rating.rate : 'N/A'} &#9733; 
                    ({item.rating ? item.rating.count : '0'} reviews)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
      {cart.length > 0 && (
        <button className="btn btn-success mt-3" onClick={handlePlaceOrder}>
          Place Order
        </button>
      )}
    </div>
  );
}

export default Cart;
