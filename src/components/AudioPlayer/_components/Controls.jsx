"use client";
import React, { useState, useEffect, useRef } from 'react';
import {
  Shuffle,
  SkipBack,
  SkipForward,
  Play,
  Repeat,
  Pause,
} from 'lucide-react';
import styles from '@/styles/songControls.module.css';

const Controls = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [seekedTime, setSeekedTime] = useState(0);
  const audioRef = useRef(null);

  // Function to format time
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;

    const updateSeekedTime = () => {
      const currentTime = audio.currentTime;
      const duration = audio.duration;
      setSeekedTime(currentTime / duration);
    };

    audio.addEventListener('timeupdate', updateSeekedTime);

    return () => {
      audio.removeEventListener('timeupdate', updateSeekedTime);
    };
  }, []);

  const handleSeek = (value) => {
    const duration = audioRef.current.duration;
    audioRef.current.currentTime = value * duration;
    setSeekedTime(value);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.control_btns}>
        <button>
          <Shuffle size={18} />
        </button>
        <button>
          <SkipBack size={20} />
        </button>
        <button onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? (
            <Pause size={30} />
          ) : (
            <Play size={30} />
          )}
        </button>
        <button>
          <SkipForward size={20} />
        </button>
        <button>
          <Repeat size={18} />
        </button>
      </div>

      <div className={styles.music_slider}>
        <p>{formatTime(seekedTime * (audioRef.current?.duration || 0))}</p>
        <input
          style={{ width: "600px", height: "3px" }}
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={seekedTime}
          onChange={(e) => handleSeek(parseFloat(e.target.value))}
        />
        <p>{formatTime(audioRef.current?.duration || 0)}</p>
      </div>

      <audio ref={audioRef} src="/music/music.mp3" />
    </div>
  );
};

export default Controls;
