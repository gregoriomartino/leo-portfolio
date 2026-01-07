// About.jsx
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import './About.css';
import AboutCarousel from './AboutCarousel';
import { toursByYear } from './toursData';

const yearsDesc = Object.keys(toursByYear)
  .map(Number)
  .sort((a, b) => b - a); // 2026, 2025, 2024...

function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="about page-container">
      <div className="about-fullwidth">
        <AboutCarousel />

        <p><strong>Leonardo Melchionda</strong> {t('about.description')}</p>
        <p>{t('about.description1')}</p>
        <p>{t('about.description2')}</p>
        <p>{t('about.description3')}</p>
        <p>{t('about.description4')}</p>
        <p>{t('about.description5')}</p>

      <div className="about-tours">
        {yearsDesc.map((year) => (
          <details key={year} className="tour-year">
            <summary>{year}</summary>

            <div className="tour-year-content">
              {toursByYear[year].map((event, idx) => (
                <div key={idx} className="tour-line">
                  <span className="tour-title">{event.title}</span>
                  <span className="tour-separator"> - </span>
                  <div className="tour-text">
                  <p>
                    <ReactMarkdown
                      components={{
                        a: (props) => (
                          <a
                            {...props}
                            href={props.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {props.children}
                          </a>
                        ),
                      }}
                    >
                      {event.markdown}
                    </ReactMarkdown>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </details>
        ))}
      </div>
      </div>
    </section>
  );
}

export default About;
