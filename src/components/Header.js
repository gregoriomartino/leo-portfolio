import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="header-navbar">
            <nav className="header-nav">
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/research">Research</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    );
}

export default Header;
