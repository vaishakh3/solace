import React from 'react'
import styles from '@/styles/player.module.css'
import SongThumbnail from './_components/SongThumbnail'
import Controls from './_components/Controls'
import AudioControl from './_components/AudioControl'


const AudioPlayer = () => {
  return (
    <div className={styles.wrapper}>
      <SongThumbnail/>
      <Controls/>
      <AudioControl/>
    </div>
  )
}

export default AudioPlayer