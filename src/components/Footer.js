import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Leonardo Melchionda. Tutti i diritti riservati.</p>
            <div className="social-links">
                <a href="https://linkedin.com/in/leonardo-melchionda" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="mailto:leonardo.melchionda@gmail.com">Email</a>
            </div>
        </footer>
    );
}

export default Footer;
