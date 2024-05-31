// src/layout/Footer.js

import React from 'react';
import './Footer.css'; // Import the CSS file for footer styling

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="social-media">
        <a href="https://www.facebook.com">
          <img src="facebook-icon.png" alt="Facebook" />
        </a>
        <a href="https://www.youtube.com">
          <img src="youtube-icon.png" alt="YouTube" />
        </a>
        {/* Add more social media links */}
      </div>
      <div className="footer-links">
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
        <a href="#">Information</a>
      </div>
      <div className="copy-right">
        &copy; 2024 Supply Chain Management. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
