import type React from "react"
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
  return (
    <main className={styles.authMain}>
      {/* Animated background particles */}
      <div className={styles.particleContainer}>
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className={styles.particle}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Morphing background shapes */}
      <div className={styles.backgroundShapes}>
        <div className={styles.shape1}></div>
        <div className={styles.shape2}></div>
        <div className={styles.shape3}></div>
      </div>

      <section className={styles.authContainer}>
        <article className={styles.authCard}>
          {/* Holographic border effect */}
          <div className={styles.holographicBorder}></div>

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
