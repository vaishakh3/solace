import React from 'react'
import styles from '@/styles/welcome.module.css'
import Link from 'next/link'


const WelcomePage = () => {
  return (
    <div className={styles.wrapper}>
        <nav>
          <img src="/images/11_.svg" alt="icon" />
          <Link href="/sign-in" className={styles.signIn}>Sign in</Link>
        </nav>
        <div className={styles.title}>
          <h1>Welcome to</h1>
          <h1 className={styles.gradient}>e1even</h1>
          <p className={styles.subtitle}>powered by e1even AI</p>
        </div>
        <div></div>
    </div>
  )
}

export default WelcomePage