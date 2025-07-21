"use client"

import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import styles from "./404.module.scss"

export default function Custom404() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleGoHome = () => {
    router.push("/")
  }

  const handleGoBack = () => {
    router.back()
  }

  if (!mounted) return null

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.errorCode}>
          <span className={styles.four}>4</span>
          <span className={styles.zero}>0</span>
          <span className={styles.four}>4</span>
        </div>

        <div className={styles.message}>
          <h1 className={styles.title}>Page Not Found</h1>
          <p className={styles.description}>
            Sorry, the page you are looking for could not be found. It may have been moved or the URL you entered is
            incorrect.
          </p>
        </div>

        <div className={styles.actions}>
          <button className={`${styles.button} ${styles.primary}`} onClick={handleGoHome}>
            <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9,22 9,12 15,12 15,22" />
            </svg>
            Go Home
          </button>

          <button className={`${styles.button} ${styles.secondary}`} onClick={handleGoBack}>
            <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15,18 9,12 15,6" />
            </svg>
            Go Back
          </button>
        </div>

        <div className={styles.suggestions}>
          <h3>Or try:</h3>
          <ul>
            <li>
              <a href="/shop" className={styles.link}>
                Browse Products
              </a>
            </li>
            <li>
              <a href="/about" className={styles.link}>
                About Us
              </a>
            </li>
            <li>
              <a href="/auth/login" className={styles.link}>
                Sign In
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.illustration}>
        <div className={styles.astronaut}>
          <div className={styles.helmet}></div>
          <div className={styles.body}></div>
          <div className={styles.arms}></div>
          <div className={styles.legs}></div>
          <div className={styles.jetpack}></div>
        </div>

        <div className={styles.stars}>
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className={styles.star}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}
