import { useEffect, useState } from 'react';
import './AboutCarousel.css';

const images = [
  '/images/about1.jpg',
  '/images/about2.jpg',
  '/images/about3.jpg',
  '/images/about4.jpg',
  '/images/about5.jpg',
  '/images/about6.jpg',
  '/images/about7.jpg',
  '/images/about8.png',
  '/images/about9.png',
  '/images/about10.png',
];

function AboutCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
    }, 4000); // cambia immagine ogni 4 secondi

    return () => clearInterval(id); // pulizia quando il componente si smonta
  }, []);

  return (
    <div className="about-carousel">
      <div className="about-carousel-frame">
        <img
          src={images[index]}
          alt={`about slide ${index + 1}`}
          className="about-carousel-image"
        />
      </div>
    </div>
  );
}

export default AboutCarousel;
