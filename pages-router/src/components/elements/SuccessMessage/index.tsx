"use client"
import styles from "./success-message.module.scss"

interface SuccessMessageProps {
  message: string
  show: boolean
}

const SuccessMessage = ({ message, show }: SuccessMessageProps) => {
  if (!show) return null

  return (
    <div className={styles.successMessage}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22,4 12,14.01 9,11.01" />
      </svg>
      {message}
    </div>
  )
}

export default SuccessMessage
