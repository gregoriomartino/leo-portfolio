import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const { t } = useTranslation();

  useEffect(() => {
    const img = new Image();
    img.src = 'public/images/progetto1.png'; // niente "public" nel path
  }, []);

  return (
   <div className="home-container">
      <Link to="/about" className="header-fullscreen-link">
        <div className="header-fullscreen">
          <h1>{t('home.title')}</h1>
        </div>
      </Link>
    </div>
  );
}

export default Home;
