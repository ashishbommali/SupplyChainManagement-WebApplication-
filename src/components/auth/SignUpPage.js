import React, { useState } from "react";
import './SignUpPage.css' // Make sure this path is correct

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!name || !email || !password || !confirmPassword) {
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
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    // TODO: Send a POST request to your backend API
    console.log('Form data:', { name, email, password });
  };

  return (
    <div className="wrapper signUp sign-up-page"> {/* Add 'sign-up-page' class here */}
      <div className="form">
        <div className="heading">CREATE AN ACCOUNT</div>
        <div className='underline'></div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="email">E-Mail</label>
            <input type="email" id="email" placeholder="Enter your mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter you password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" placeholder="Enter you password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          </div>
          <button type="submit">Signup</button>
        </form>
        {/* <p>
          Have an account ? <Link to="/authpage"> Login </Link>
        </p> */}
      </div>
    </div>
  );
};

export default SignUpPage;
