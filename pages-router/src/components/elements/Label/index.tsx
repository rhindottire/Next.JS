import type React from "react"
import styles from "./label.module.scss"

interface LabelProps {
  children: React.ReactNode
  htmlFor?: string
  className?: string
}

const Label = ({ children, htmlFor, className = "" }: LabelProps) => {
  return (
    <label htmlFor={htmlFor} className={`${styles.label} ${className}`}>
      {children}
    </label>
  )
}

export default Label
