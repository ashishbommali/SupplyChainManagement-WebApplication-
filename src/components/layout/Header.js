import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import imgSrc from '../../assets/images/prowess.png';
import backgroundImage from '../../assets/images/supply_chain_management.jpg';
import './Header.css';

const Header = () => {
    const [searchActive, setSearchActive] = useState(false);

    const toggleSearch = () => {
        setSearchActive(!searchActive);
    };

    return (
        <header className="header" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="logo">
                <img src={imgSrc} alt="Company Logo" />
            </div>
            <div className="user-icon">
                <Link to="/authpage">
                    <FontAwesomeIcon icon={faUser} /><p>Login/Signin</p>
                </Link>
            </div>
            <div className={`search-wrapper ${searchActive ? 'active' : ''}`}>
                <div className="input-holder">
                    <input type="text" className="search-input" placeholder="Type to search" />
                    <button className="search-icon" onClick={toggleSearch}>
                        <span></span>
                    </button>
                </div>
                <span className="close" onClick={toggleSearch}></span>
            </div>

        </header>
    );
};

export default Header;
