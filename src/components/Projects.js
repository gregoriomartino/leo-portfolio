import { Trans, useTranslation} from 'react-i18next';
import './Projects.css';

function Projects() {
    const { t } = useTranslation();

    return (
        <section id="projects" className="projects page-container">
         <img src="/images/Melchionda_998_Album Cover.jpg" alt="research" className="image" />
            <div className="projects-title">

                <span className="pre">{t("projects.title")}</span>
                <span className="main">{t("projects.albumTitle")}</span>
                <span className="sub">{t("projects.albumTitle2")}</span>
            </div>

            {/* Paragrafi full-width */}
            <div className="projects-fullwidth">
                <p><strong>{t("projects.description")}</strong>{t("projects.description0")}</p>
                <p>{t("projects.description1")}</p>
              <p>
                <Trans
                  i18nKey="projects.description2"
                  components={{ italic: <i /> }}
                />
              </p>
                <p>{t("projects.description3")}</p>
                     <p>
                                <Trans
                                  i18nKey="projects.description4"
                                  components={{ italic: <i /> }}
                                />
                              </p>
                <p>{t("projects.description5")}</p>
                <p>{t("projects.description6")}</p>
                <p>
                  <a
                    href="https://leonardomelchionda.bandcamp.com/album/998"
                    target="_blank"
                    rel="noreferrer"
                  >
                   {t("projects.linkCd")}
                  </a>
                </p>
<div className="research-video">
  <iframe
    src="https://www.youtube.com/embed/YzSiRWGSuZ4?si=r-kwSER6Iy9w0-eV"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  />
</div>

            </div>

        </section>
    );
}

export default Projects;
