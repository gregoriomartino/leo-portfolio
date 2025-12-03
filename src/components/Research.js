import React from 'react';
import './Research.css';

function Research() {
    return (
        <section id="research" className="research">
            <div className="content">
                <h2>
                    Multisensory Sounds: towards an accessible experience of music
                    for Deaf and Hard of Hearing people.
                </h2>

                <p>
                    This research studies innovative compositional and performative practices
                    to facilitate multisensory experiences of music accessible to Deaf and hard
                    of hearing people through vibrotactile systems to stimulate haptic perception
                    of sound. It also studies the possibilities to facilitate a better music
                    appreciation for cochlear implant users by developing a specific protocol
                    of neurosensory rehabilitation to listening.
                </p>

                <p>
                    Developed in a multidisciplinary context, this research collaborates with
                    the otolaryngology department of the University Hospital in Siena, and with
                    the biorobotics institutes of the University of Siena and the School of Advanced
                    Studies Sant'Anna in Pisa. It adopts a qualitative methodology based on
                    collective composition workshops, interviews, and focus groups. The expected
                    results include an accessible multisensory performance and a dissertation
                    documenting the entire process.
                </p>

                <p>
                    Scientific poster presentation at the Third ANDA Conference at the
                    “A. Vivaldi” Conservatory of Music in Alessandria, 17-19 October 2025;
                    more info:
                    <a href="https://www.anda-afam.it/alessandria/"
                        target="_blank"
                        rel="noopener noreferrer">
                        {' '}(ANDA website)
                    </a>
                </p>

                <img src="/images/ANDA.PNG" alt="research" className="image" />
            </div>
        </section>
    );
}

export default Research;
