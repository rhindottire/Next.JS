"use client"

import type React from "react"
import styles from "./input.module.scss"

interface InputProps {
  type?: "text" | "email" | "password"
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
  required?: boolean
  name?: string
  disabled?: boolean
  id?: string
  "aria-label"?: string
  "aria-describedby"?: string
}

const Input = ({
  type = "text",
  placeholder,
  value,
  onChange,
  className = "",
  required = false,
  name,
  disabled = false,
  id,
  "aria-label": ariaLabel,
  "aria-describedby": ariaDescribedBy,
}: InputProps) => {
  return (
    <div className={styles.inputContainer}>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${styles.input} ${className}`}
        required={required}
        name={name}
        disabled={disabled}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedBy}
      />
      <div className={styles.inputGlow}></div>
      <div className={styles.inputBorder}></div>
    </div>
  )
}

export default Input
