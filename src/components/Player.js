import { useEffect, useRef, useState } from 'react';
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
                <button onClick={prevTrack} aria-label="Previous">⏮️</button>
                <button onClick={togglePlay} aria-label="Play/Pause">{isPlaying ? '⏸️' : '▶️'}</button>
                <button onClick={nextTrack} aria-label="Next">⏭️</button>
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
            />

            {/* Slider volume */}
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
            />

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

            {/* Pulsante Compra/Scarica per la traccia corrente */}
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
