import { useTranslation } from 'react-i18next';
import './Projects.css';

function Projects() {
    const { t } = useTranslation();

    return (
        <section id="projects" className="projects page-container">
            <div className="projects-title">
                <span className="pre">{t("projects.title")}</span>
                <span className="main">{t("projects.albumTitle")}</span>
                <span className="sub">{t("projects.albumTitle2")}</span>
            </div>

            {/* Paragrafi full-width */}
            <div className="projects-fullwidth">
                <p><strong>{t("projects.description")}</strong>{t("projects.description0")}</p>
                <p>{t("projects.description1")}</p>
                <p>{t("projects.description2")}</p>
                <p>{t("projects.description3")}</p>
                <p>{t("projects.description4")}</p>
                <p>{t("projects.description5")}</p>
            </div>

        </section>
    );
}

export default Projects;
