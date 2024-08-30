import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();

    axios.post('https://fakestoreapi.com/users', {
      username,
      email
    })
    .then(() => {
      Swal.fire('Success', 'User signed up successfully!', 'success');
    })
    .catch(() => {
      Swal.fire('Error', 'Failed to sign up!', 'error');
    });
  };

  return (
    <div className='container mt-5 col-4'>
    <form onSubmit={handleSignUp}>
      <input type="text" className='form-control' placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="email" className='form-control mt-4' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button type="submit" className='mt-3 btn btn-primary'>Sign Up</button>
    </form>
    </div>
  );
}

export default SignUp;
