"use client"

import type React from "react"
import Label from "@/components/elements/Label"
import Input from "@/components/elements/Input"
import styles from "./form-field.module.scss"

interface FormFieldProps {
  label: string
  type?: "text" | "email" | "password"
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
  name?: string
  error?: string
  disabled?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  id?: string
}

const FormField = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  required,
  name,
  error,
  disabled,
  leftIcon,
  rightIcon,
  id,
}: FormFieldProps) => {
  const fieldId = id || name
  const errorId = error ? `${fieldId}-error` : undefined

  return (
    <fieldset className={styles.formField}>
      <Label htmlFor={fieldId} className={required ? styles.required : ""}>
        {label}
      </Label>

      <div className={styles.inputWrapper}>
        {leftIcon && (
          <div className={styles.leftIcon} aria-hidden="true">
            {leftIcon}
          </div>
        )}

        <Input
          id={fieldId}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          name={name}
          className={`${error ? styles.error : ""} ${leftIcon ? styles.hasLeftIcon : ""} ${rightIcon ? styles.hasRightIcon : ""}`}
          disabled={disabled}
          aria-describedby={errorId}
          aria-invalid={error ? "true" : "false"}
        />

        {rightIcon && <div className={styles.rightIcon}>{rightIcon}</div>}
      </div>

      {error && (
        <div id={errorId} className={styles.errorMessage} role="alert">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
          {error}
        </div>
      )}
    </fieldset>
  )
}

export default FormField
