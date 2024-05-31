import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './LoginPage.css' // Make sure this path is correct

const LoginPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Add this line

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!name || !email || !password) {
      alert('All fields are required.');
      return;
    }

    if (name.length < 3) {
      alert('Name should be of minimum length 3.');
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (password.length < 8 || !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/.test(password)) {
      alert('Password should be at least 8 characters long and include at least one digit, one lowercase letter, one uppercase letter, and one special character.');
      return;
    }

    // TODO: Send a POST request to your backend API
    console.log('Form data:', { name, email, password });

    // Send a POST request to your backend API
    const response = await fetch('YOUR_BACKEND_API_URL/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      // Handle successful login
      console.log('Login successful:', data);

      // Navigate to the appropriate page based on the user's role
      switch (data.role) {
        case 'distributor':
          navigate.push('/distributor');
          break;
        case 'consumer':
          navigate.push('/consumer');
          break;
        case 'producer':
          navigate.push('/producer');
          break;
        case 'retailer':
          navigate.push('/retailer');
          break;
        // Add more cases as needed
        default:
          alert('Unknown role');
      }

    } else {
      // Handle errors
      console.log('Login failed: please check your login information', data);
    }
  };

  return (
    <div className="wrapper signIn login-page"> {/* Add 'login-page' class here */}
      <div className="form">
        <div className="heading">LOGIN</div>
        <div className='underline'></div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="email">E-Mail</label>
            <input type="email" id="email" placeholder="Enter you mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter you password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit">Login</button>
        </form>
        {/* <p>
          Don't have an account ? <Link to="/authpage"> Sign In </Link>
        </p> */}
      </div>
    </div>
  );
};

export default LoginPage;