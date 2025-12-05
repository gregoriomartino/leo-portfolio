import { useTranslation } from 'react-i18next';
import './About.css';

function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="about page-container">

      {/* Full-width text */}
      <div className="about-fullwidth">
        <p><strong>Leonardo Melchionda</strong> {t("about.description")}</p>
        <p>{t("about.description1")}</p>
        <p>{t("about.description2")}</p>
        <p>{t("about.description3")}</p>
        <p>{t("about.description4")}</p>
        <p>{t("about.description5")}</p>
      </div>

    </section>
  );
}

export default About;
