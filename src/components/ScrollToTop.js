import React, { useState, useEffect } from 'react';
import './ScrollToTop.css';

function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    // Mostra la freccia quando scrolli oltre 300px
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // scroll fluido
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div className={`scroll-to-top ${visible ? 'show' : ''}`} onClick={scrollToTop}>
            ↑
        </div>
    );
}

export default ScrollToTop;
