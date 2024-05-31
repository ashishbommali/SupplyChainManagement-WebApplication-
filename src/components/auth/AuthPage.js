import React from 'react';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import './AuthPage.css';

const AuthPage = () => {
  return (
    <div className="auth-page">
      <div className="card login-section">
        <LoginPage />
      </div>
      <div className="card signup-section">
        <SignUpPage />
      </div>
    </div>
  );
};

export default AuthPage;
