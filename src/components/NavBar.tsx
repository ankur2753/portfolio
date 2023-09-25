import React from 'react';
import './NavBar.css';

const NavBar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    );
};

export default NavBar;
