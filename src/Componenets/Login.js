import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';

function Login() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();


  const handleLogin = (e) => {
    e.preventDefault();

    // Simulating login
    if (email) {
      Swal.fire('Success', 'Logged in successfully!', 'success');
      navigate('/categories');
    } else {
      Swal.fire('Error', 'Please enter your email!', 'error');
    }
  };

  return (
    <div className='container mt-5 col-4'>
    <form onSubmit={handleLogin}>
      <input type="email" className='form-control' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button className='btn btn-primary mt-4' type="submit">Login</button>
    </form>
    </div>
  );
}

export default Login;
