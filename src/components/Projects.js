import React from 'react';
import Player from './Player';
import projects from '../data/projects';
import './Projects.css';

function Projects() {
    return (
        <div id="projects" className="projects-page">
            {projects.map((album, idx) => (
                <div key={idx} className="album-card">
                    {/* Cover album con fallback */}

                    <img
                        src={album.tracks?.[0]?.cover || "/default-cover.jpg"}
                        alt={album.title}
                        className="album-cover"
                    />

                    <div className="album-info">
                        <h2>{album.title}</h2>
                        <p>{album.description}</p>

                        {/* Player integrato */}
                        {album.tracks && album.tracks.length > 0 ? (
                            <Player tracks={album.tracks} />
                        ) : (
                            <div>Nessuna traccia disponibile</div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Projects;
