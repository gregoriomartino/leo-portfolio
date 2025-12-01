import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header-fullscreen">
            <div className="overlay">
                <h1>Leonardo Melchionda</h1>
                <nav className="header-nav">
                    <a href="#home">Home</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contatti</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
