"use client"

import React from "react";
import styles from "@/styles/welcome.module.css";
import { signIn } from "next-auth/react";

function SignInForm() {
  return (
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
        <button style={{ marginTop: "30px" }}>Sign in</button>

        <div className={styles.or_section}>
          <div className={styles.line}></div>
          <p>OR</p>
          <div className={styles.line}></div>
        </div>

        <button
          onClick={() =>
            signIn("google", {
              callbackUrl: "/",
              redirect: true,
            })
          }
          className={styles.google_btn}
        >
          <img src="/icons/google.svg" alt="google" /> Sign up with Google
        </button>
      </div>
    </div>
  );
}

export default SignInForm;
