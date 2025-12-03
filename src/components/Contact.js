import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <section id="contact" className="contact">
            <h2>Contact</h2>

            <div className="contact-block">
                <h3>Music, Guitar, Philosophy, Current Events, Life, Dreams</h3>
                <p>
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@leonardomelchionda.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        contact@leonardomelchionda.com
                    </a>
                </p>
            </div>

            <div className="contact-block">
                <h3>Research</h3>
                <p>
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=research@leonardo.melchionda@boccherini.it"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        leonardo.melchionda@boccherini.it
                    </a>
                </p>
            </div>

            <div className="contact-block">
                <h3>Collaborations and Bookings</h3>
                <p>
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=social@leonardomelchionda.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        social@leonardomelchionda.com
                    </a>
                </p>
            </div>

            <div className="contact-block">
                <h3>Follow Me</h3>
                <p>
                    <a href="https://leonardomelchionda.bandcamp.com/" target="_blank" rel="noreferrer">Bandcamp</a> |
                    <a href="https://www.youtube.com/@ledgtr92" target="_blank" rel="noreferrer"> YouTube</a> |
                    <a href="https://www.instagram.com/leo__mel/" target="_blank" rel="noreferrer"> Instagram</a>
                </p>
            </div>
        </section>
    );
}

export default Contact;
