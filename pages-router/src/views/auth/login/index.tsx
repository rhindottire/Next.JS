"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import LoginForm from "@/components/fragments/LoginForm"
import SuccessMessage from "@/components/elements/SuccessMessage"
import AuthTemplate from "@/components/templates/auth"

const LoginView = () => {
  const { push } = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  // Enhanced keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        // Handle escape key if needed
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  const handleLogin = async (email: string, password: string) => {
    setIsLoading(true)

    try {
      // Simulasi API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      console.log("Login attempt:", { email, password })

      // Show success message briefly
      setShowSuccess(true)

      // Delay navigation to show success state
      setTimeout(() => {
        push("/product")
      }, 1000)
    } catch (error) {
      console.error("Login failed:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AuthTemplate
      title="Welcome Back"
      subtitle="Sign in to your account to continue"
      footerText="Don't have an account?"
      footerLink={{
        text: "Sign up here",
        href: "/auth/register",
      }}
    >
      <SuccessMessage message="Login successful! Redirecting..." show={showSuccess} />
      <LoginForm onSubmit={handleLogin} isLoading={isLoading} />
    </AuthTemplate>
  )
}

export default LoginView
