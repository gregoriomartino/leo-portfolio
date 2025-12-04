import { useTranslation } from 'react-i18next';
import './About.css';

function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="about page-container">
      <p><strong>Leonardo Melchionda</strong> {t("about.description")}</p>
    </section>
  );
}

export default About;
