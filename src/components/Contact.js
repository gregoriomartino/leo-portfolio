import { useTranslation } from 'react-i18next';
import './Contact.css';

function Contact() {
    const { t } = useTranslation();

    return (
        <section id="contact" className="contact page-container">
            <h2>{t('contact.title')}</h2>

            <div className="contact-block">
                <h3>{t('contact.music.title')}</h3>
                <p>
                    <a href="mailto:contact@leonardomelchionda.com">
                        contact@leonardomelchionda.com
                    </a>
                </p>
            </div>

            <div className="contact-block">
                <h3>{t('contact.research.title')}</h3>
                <p>
                    <a href="mailto:leonardo.melchionda@boccherini.it">
                        leonardo.melchionda@boccherini.it
                    </a>
                </p>
            </div>

            <div className="contact-block">
                <h3>{t('contact.collab.title')}</h3>
                <p>
                    <a href="mailto:social@leonardomelchionda.com">
                        social@leonardomelchionda.com
                    </a>
                </p>
            </div>

            <div className="contact-block">
                <h3>{t('contact.follow.title')}</h3>
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
