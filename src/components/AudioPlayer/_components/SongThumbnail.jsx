import React from 'react'
import styles from '@/styles/songThumbnail.module.css'
import Image from 'next/image'

const SongThumbnail = () => {
    const thumbnail = "/images/thumb.avif"
  return (
    <div className={styles.wrapper}>
        <Image width={60} height={60} src={thumbnail} style={{borderRadius:'5px'}}/>
        <div className={styles.song_details}>
            <h3>Blank Space</h3>
            <p>Taylor Swift</p>
        </div>
    </div>
  )
}

export default SongThumbnail