import React, { useState, useRef, useEffect } from 'react';
import './Player.css';

function Player({ tracks = [] }) {
    const [currentTrack, setCurrentTrack] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [volume, setVolume] = useState(1);
    const audioRef = useRef(null);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const updateProgress = () => {
            if (audio.duration) setProgress(audio.currentTime / audio.duration);
        };

        audio.addEventListener('timeupdate', updateProgress);
        return () => audio.removeEventListener('timeupdate', updateProgress);
    }, [currentTrack]);

    const togglePlay = () => {
        const audio = audioRef.current;
        if (!audio) return;
        if (isPlaying) audio.pause();
        else audio.play();
        setIsPlaying(!isPlaying);
    };

    const nextTrack = () => setCurrentTrack((prev) => (prev + 1) % tracks.length);
    const prevTrack = () => setCurrentTrack((prev) => (prev - 1 + tracks.length) % tracks.length);

    if (!tracks || tracks.length === 0) {
        return <div className="player-advanced">Nessuna traccia disponibile</div>;
    }

    const current = tracks[currentTrack];

    return (
        <div className="player-advanced">
            <h4>{current.title}</h4>

            <audio ref={audioRef} src={current.url} />

            {/* Controlli principali */}
            <div className="controls">
                <button onClick={prevTrack} aria-label="Previous" className="btn-icon prev">
                    <svg width="16" height="16" viewBox="0 0 24 24">
                        <polygon points="15,6 9,12 15,18" fill="#111" />
                        <rect x="6" y="6" width="2" height="12" fill="#111" />
                    </svg>
                </button>

                <button onClick={togglePlay} aria-label="Play/Pause" className="btn-icon play">
                    {isPlaying ? (
                        <svg width="16" height="16" viewBox="0 0 24 24">
                            <rect x="6" y="4" width="4" height="16" fill="#111" />
                            <rect x="14" y="4" width="4" height="16" fill="#111" />
                        </svg>
                    ) : (
                        <svg width="16" height="16" viewBox="0 0 24 24">
                            <polygon points="6,4 20,12 6,20" fill="#111" />
                        </svg>
                    )}
                </button>

                <button onClick={nextTrack} aria-label="Next" className="btn-icon next">
                    <svg width="16" height="16" viewBox="0 0 24 24">
                        <polygon points="9,6 15,12 9,18" fill="#111" />
                        <rect x="16" y="6" width="2" height="12" fill="#111" />
                    </svg>
                </button>
            </div>

            {/* Slider progresso */}
            <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={progress}
                onChange={(e) => {
                    const audio = audioRef.current;
                    if (!audio) return;
                    audio.currentTime = e.target.value * audio.duration;
                    setProgress(e.target.value);
                }}
                className="slider"
            />

            {/* Slider volume con icona dinamica */}
            <div className="volume-container">
                <div className="volume-icon">
                    {volume === 0 ? (
                        <svg width="16" height="16" viewBox="0 0 24 24">
                            <polygon points="3,9 9,9 14,4 14,20 9,15 3,15" fill="#111" />
                            <line x1="18" y1="6" x2="6" y2="18" stroke="#111" strokeWidth="2" />
                        </svg>
                    ) : volume < 0.5 ? (
                        <svg width="16" height="16" viewBox="0 0 24 24">
                            <polygon points="3,9 9,9 14,4 14,20 9,15 3,15" fill="#111" />
                            <path d="M16 12C16 12 16.5 12.5 16.5 12.5" stroke="#111" strokeWidth="2" />
                        </svg>
                    ) : (
                        <svg width="16" height="16" viewBox="0 0 24 24">
                            <polygon points="3,9 9,9 14,4 14,20 9,15 3,15" fill="#111" />
                            <path d="M16 8C17.1046 8 18 8.89543 18 10V14C18 15.1046 17.1046 16 16 16" stroke="#111" strokeWidth="2" />
                        </svg>
                    )}
                </div>
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={(e) => {
                        const audio = audioRef.current;
                        if (!audio) return;
                        audio.volume = e.target.value;
                        setVolume(e.target.value);
                    }}
                    className="slider volume-slider"
                />
            </div>

            {/* Playlist */}
            <div className="playlist">
                {tracks.map((track, index) => (
                    <div
                        key={index}
                        className={`playlist-item ${index === currentTrack ? 'active' : ''}`}
                        onClick={() => setCurrentTrack(index)}
                    >
                        {track.title}
                    </div>
                ))}
            </div>

            {/* Pulsante Compra/Scarica */}
            {current.buyLink && (
                <div className="buy-button-container">
                    <a
                        href={current.buyLink}
                        className="buy-button"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Compra / Scarica
                    </a>
                </div>
            )}
        </div>
    );
}

export default Player;
