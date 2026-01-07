import { useEffect } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import './Research.css';

function Research() {
  const { t } = useTranslation();

  useEffect(() => {
    const img = new Image();
    img.src = "/images/ANDA.PNG";
  }, []);

  return (<section id="research" className="research page-container">
            <div className="research-content">
              <h2 className="research-title">
                <Trans
                  i18nKey="research.title"
                  components={{ 1: <span className="desc-small" /> }}
                />
              </h2>


              <div className="research-row">
                {/* 1. description1 */}
                <p className="research-desc">
                  <Trans
                    i18nKey="research.description1"
                    components={{ 1: <br /> }}
                  />
                </p>

                {/* 2. immagine */}
                <img
                  src="/images/leoimg.jpeg"
                  alt="research"
                  className="research-image"
                />

                {/* 3. publication */}
                <p className="research-publication">
                  <Trans
                    i18nKey="research.publication"
                    components={{ bold: <strong /> }}
                  />
                </p>

                {/* 4. presentation + ANDA */}
                <p className="research-presentation">
                  {t('research.presentation')}{' '}
                  <a
                    href="https://www.anda-afam.it/alessandria/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ANDA
                  </a><br/>
                  {t('research.read')}
                   <a
                                      href="https://drive.google.com/file/d/1M-CrMSMfrKDBGQuor89I71vwfclvXuMH/view?usp=sharing"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      Poster ANDA III
                                                       </a>
                </p>

              </div>
            </div>
          </section>

  );
}

export default Research;
