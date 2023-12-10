'use client'
import React from "react";
import styles from "@/styles/artist.module.css";
import Image from "next/image";
import { Play, Heart } from "lucide-react";

function ArtistPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.artist_info}>
        <Image width={228} height={228} src="/images/thumb.avif" style={{borderRadius:'15px'}}/>
        <div className={styles.info}>
          <h2>Suki Waterhouse</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            pharetra aliquam vehicula. Nam tempor convallis ultrices.
            Suspendisse potenti.
          </p>
          <div className={styles.btns}>
            <button className={styles.play_btn}>
              <Image width={42} height={42} src="/icons/play.svg" />
            </button>
            <button className={styles.heart_btn}>
              <Heart size={22} color="#2BB3FF"/>
            </button>
          </div>
        </div>
      </div>

      <div className={styles.tracks_table}>
        <div>
          
        </div>
      </div>
    
    </div>
  );
}

export default ArtistPage;
