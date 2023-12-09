import React from "react";
import styles from "@/styles/welcome.module.css";
import Link from "next/link";

const SignInPage = () => {
  return (
    <div className={styles.wrapper}>
      <nav>
        <img src="/images/11_.svg" alt="icon" />
        <Link href="/sign-in" className={styles.signIn}>
          Sign in
        </Link>
      </nav>
      <div className={styles.title}>
        <h1>Welcome to</h1>
        <h1 className={styles.gradient}>e1even</h1>
        <p className={styles.subtitle}>powered by e1even AI</p>
      </div>
      <div></div>

      <div className={styles.signIn_wrapper}>
        <h3>Sign up</h3>

        <div className={styles.input_section}>
          <div className={styles.input_group}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={styles.input_group}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button style={{marginTop:'30px'}}>Sign in</button>

            <div className={styles.or_section}>
                <div className={styles.line}></div>
                <p>OR</p>
                <div className={styles.line}></div>
            </div>

          <button className={styles.google_btn}>
            <img src="/icons/google.svg" alt="google" /> Sign up with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
