import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Leonardo Melchionda. Tutti i diritti riservati.</p>
        </footer>
    );
}

export default Footer;
