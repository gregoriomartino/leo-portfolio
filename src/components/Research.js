import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Research.css';





function Research() {
    const { t } = useTranslation();

    useEffect(() => {
        const img = new Image();
        img.src = "/images/ANDA.PNG";
    }, []);

    return (
        <section id="research" className="research page-container">
            <div className="research-content">
                <h2>{t("research.title")}</h2>

                <p>{t("research.description1")}</p>

                <p>{t("research.description2")}</p>

                <p>
                    {t("research.presentation")}
                    <a href="https://www.anda-afam.it/alessandria/" target="_blank" rel="noopener noreferrer">
                        (ANDA website)
                    </a>
                </p>

                <img src="/images/ANDA.PNG" alt="research" className="image" />
            </div>
        </section>
    );
}

export default Research;
