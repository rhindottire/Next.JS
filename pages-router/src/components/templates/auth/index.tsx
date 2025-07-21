"use client"

import type React from "react"
import { useEffect, useState } from "react"
import Link from "next/link"
import styles from "./auth-template.module.scss"

interface AuthTemplateProps {
  title: string
  subtitle?: string
  children: React.ReactNode
  footerText?: string
  footerLink?: {
    text: string
    href: string
  }
}

const AuthTemplate = ({ title, subtitle, children, footerText, footerLink }: AuthTemplateProps) => {
  const [stars, setStars] = useState<
    Array<{
      id: number
      top: string
      left: string
      size: string
      delay: string
    }>
  >([])

  useEffect(() => {
    // Generate realistic night sky stars
    const generateStars = () => {
      const starArray = []

      // Main stars (bright and visible)
      for (let i = 0; i < 50; i++) {
        const sizes = ["small", "medium", "large", "bright"]
        const randomSize = sizes[Math.floor(Math.random() * sizes.length)]

        starArray.push({
          id: i,
          top: `${Math.random() * 70}%`, // Keep stars in upper 70% of sky
          left: `${Math.random() * 100}%`,
          size: randomSize,
          delay: `${Math.random() * 6}s`,
        })
      }

      // Distant stars (tiny and dim)
      for (let i = 50; i < 120; i++) {
        starArray.push({
          id: i,
          top: `${Math.random() * 80}%`,
          left: `${Math.random() * 100}%`,
          size: "tiny distant",
          delay: `${Math.random() * 10}s`,
        })
      }

      // Star clusters (small grouped stars)
      for (let i = 120; i < 180; i++) {
        // Create clusters around certain areas
        const clusterCenterX = Math.random() * 100
        const clusterCenterY = Math.random() * 60

        starArray.push({
          id: i,
          top: `${clusterCenterY + (Math.random() - 0.5) * 15}%`,
          left: `${clusterCenterX + (Math.random() - 0.5) * 15}%`,
          size: "tiny cluster",
          delay: `${Math.random() * 4}s`,
        })
      }

      setStars(starArray)
    }

    generateStars()
  }, [])

  return (
    <main className={styles.authMain}>
      {/* Milky Way Background */}
      <div className={styles.milkyWay} />

      {/* Night Sky Stars */}
      <div className={styles.nightSkyContainer}>
        {stars.map((star) => (
          <div
            key={star.id}
            className={`${styles.star} ${star.size
              .split(" ")
              .map((s) => styles[s])
              .join(" ")}`}
            style={{
              top: star.top,
              left: star.left,
              animationDelay: star.delay,
            }}
          />
        ))}
      </div>

      {/* Subtle Cloud Layer */}
      <div className={styles.cloudLayer} />

      <section className={styles.authContainer}>
        <article className={styles.authCard}>
          <header className={styles.authHeader}>
            <h1 className={styles.authTitle}>{title}</h1>
            {subtitle && <p className={styles.authSubtitle}>{subtitle}</p>}
          </header>

          <section className={styles.authContent}>{children}</section>

          {footerText && footerLink && (
            <footer className={styles.authFooter}>
              <p>
                {footerText}{" "}
                <Link href={footerLink.href} className={styles.authLink}>
                  {footerLink.text}
                </Link>
              </p>
            </footer>
          )}
        </article>
      </section>
    </main>
  )
}

export default AuthTemplate
