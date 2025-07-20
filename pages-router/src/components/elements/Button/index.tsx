"use client"

import type React from "react"
import styles from "./button.module.scss"

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  type?: "button" | "submit" | "reset"
  variant?: "primary" | "secondary" | "ghost"
  className?: string
  disabled?: boolean
  "aria-label"?: string
}

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  disabled = false,
  "aria-label": ariaLabel,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${styles[variant]} ${className}`}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      <span className={styles.buttonContent}>{children}</span>
      <div className={styles.buttonGlow}></div>
      <div className={styles.rippleContainer}></div>
    </button>
  )
}

export default Button
