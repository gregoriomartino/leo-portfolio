import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="header-navbar">
      <nav className="header-nav">
        <NavLink to="/" end className="header-link home-link">
          {t('nav.home')}
        </NavLink>
        <NavLink to="/projects" className="header-link">
          {t('nav.projects')}
        </NavLink>
        <NavLink to="/research" className="header-link">
          {t('nav.research')}
        </NavLink>
        <NavLink to="/about" className="header-link">
          {t('nav.about')}
        </NavLink>
        <NavLink to="/contact" className="header-link">
          {t('nav.contact')}
        </NavLink>
      </nav>

      <div className="lang-switch">
        <button onClick={() => changeLanguage('en')}>
          <strong>EN</strong>
        </button>
        <button onClick={() => changeLanguage('it')}>
          <strong>IT</strong>
        </button>
      </div>
    </header>
  );
}

export default Header;
