import { useTranslation } from 'react-i18next';
import './Footer.css';

function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} {t('footer.name')}. {t('footer.rights')}</p>
        </footer>
    );
}

export default Footer;
