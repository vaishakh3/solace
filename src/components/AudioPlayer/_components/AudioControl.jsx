"use client";

import React, { useState } from "react";
import styles from "@/styles/controls.module.css";
import { Volume2, VolumeX, Mic2 } from "lucide-react";

const AudioControl = () => {
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(false);
  const finalVolume = muted ? 0 : volume ** 2;
  return (
    <div className={styles.volume_bar_container}>
      <button>
        <Mic2 width={20} />
      </button>
      <button onClick={() => setMuted((m) => !m)}>
        {muted ? <VolumeX /> : <Volume2 />}
      </button>
      <input
        style={{ height: "3px" }}
        type="range"
        min={0}
        max={1}
        step={0.02}
        value={volume}
        onChange={(event) => {
          setVolume(event.target.valueAsNumber);
        }}
      />
    </div>
  );
};

export default AudioControl;
