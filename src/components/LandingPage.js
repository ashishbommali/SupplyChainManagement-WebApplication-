import React from 'react';
import Header from './layout/Header';
import Content from './layout/Content'; // Import Content component
import Footer from './layout/Footer';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div>
            <Header />
            <Content /> 
            <Footer />
        </div>
    );
};

export default LandingPage;
