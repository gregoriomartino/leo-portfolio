import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <header className="header-navbar">
            <nav className="header-nav">
                <Link to="/">{t("nav.home")}</Link>
                <Link to="/projects">{t("nav.projects")}</Link>
                <Link to="/research">{t("nav.research")}</Link>
                <Link to="/about">{t("nav.about")}</Link>
                <Link to="/contact">{t("nav.contact")}</Link>
            </nav>

            {/* Switch lingua */}
            <div className="lang-switch">
                <button onClick={() => changeLanguage("en")}><strong>EN</strong></button>
                <button onClick={() => changeLanguage("it")}><strong>IT</strong></button>
            </div>
        </header>
    );
}

export default Header;
