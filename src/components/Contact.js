import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <section id="contact" className="contact">
            <h2>Contattami</h2>
            <p>Scrivimi un messaggio via email o tramite i social:</p>
            <ul>
                <li>Email: leo@email.com</li>
                <li>LinkedIn: <a href="https://linkedin.com/in/leo" target="_blank" rel="noreferrer">linkedin.com/in/leo</a></li>

            </ul>
        </section>
    );
}

export default Contact;
