import { useTranslation } from 'react-i18next';
import './Projects.css';

function Projects() {
    const { t } = useTranslation();

    return (
        <section id="projects" className="projects page-container">
            <h1>{t("projects.title")}</h1>
            <h2>{t("projects.albumTitle")}</h2>
            <div id="projects-paragraph" className="projects-paragraph">
                {t("projects.description")}
            </div>
        </section>
    );
}

export default Projects;
