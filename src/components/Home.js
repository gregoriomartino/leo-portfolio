import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Home.css';

function Home() {
    const { t } = useTranslation();

    useEffect(() => {
        const img = new Image();
        img.src = 'public/images/progetto1.webp';
    }, []);

    return (
        <div className="home-container">
            <div className="header-fullscreen">
                <h1>{t("home.title")}</h1>
                <p className="subtitle">{t("home.subtitle")}</p>
            </div>
        </div>
    );
}

export default Home;
