"use client"

import type React from "react"
import { useState } from "react"
import FormField from "../FormField"
import Button from "@/components/elements/Button"
import styles from "./login-form.module.scss"

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void
  isLoading?: boolean
}

const LoginForm = ({ onSubmit, isLoading = false }: LoginFormProps) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({})
  const [showPassword, setShowPassword] = useState(false)

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {}

    if (!email) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!password) {
      newErrors.password = "Password is required"
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (validateForm()) {
      onSubmit(email, password)
    }
  }

  // Enhanced Icons
  const MailIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )

  const LockIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <circle cx="12" cy="16" r="1" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )

  const EyeIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )

  const EyeOffIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  )

  return (
    <form onSubmit={handleSubmit} className={styles.loginForm} noValidate>
      <fieldset className={styles.formFieldset}>
        <legend className={styles.formLegend}>Account Credentials</legend>

        <FormField
          label="Email Address"
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (errors.email) setErrors({ ...errors, email: undefined })
          }}
          required
          name="email"
          error={errors.email}
          leftIcon={<MailIcon />}
        />

        <FormField
          label="Password"
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
            if (errors.password) setErrors({ ...errors, password: undefined })
          }}
          required
          name="password"
          error={errors.password}
          leftIcon={<LockIcon />}
          rightIcon={
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className={styles.passwordToggle}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOffIcon /> : <EyeIcon />}
            </button>
          }
        />
      </fieldset>

      <section className={styles.formOptions}>
        <label className={styles.checkbox}>
          <input type="checkbox" name="remember" />
          <span className={styles.checkmark}></span>
          Remember me
        </label>

        <a href="#" className={styles.forgotPassword}>
          Forgot password?
        </a>
      </section>

      <section className={styles.submitSection}>
        <Button
          type="submit"
          variant="primary"
          disabled={isLoading}
          aria-label={isLoading ? "Signing in, please wait" : "Sign in to your account"}
        >
          {isLoading ? "Signing in..." : "Sign In"}
        </Button>
      </section>
    </form>
  )
}

export default LoginForm
