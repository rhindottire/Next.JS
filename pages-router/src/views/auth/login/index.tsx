"use client"

import { useState } from "react"
import { useRouter } from "next/router"
import LoginForm from "@/components/fragments/LoginForm"
import SuccessMessage from "@/components/elements/SuccessMessage"
import AuthTemplate from "@/components/templates/auth"

const LoginView = () => {
  const { push } = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleLogin = async (email: string, password: string) => {
    setIsLoading(true)

    try {
      // Simulasi API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      console.log("Login attempt:", { email, password })

      // Show success message briefly
      setShowSuccess(true)

      // Delay navigation to show success state
      setTimeout(() => {
        push("/")
      }, 1000)
    } catch (error) {
      console.error("Login failed:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AuthTemplate
      title="Sign In"
      subtitle="Enter your email and password to sign in"
      footerText="Don't have an account?"
      footerLink={{
        text: "Sign up",
        href: "/auth/register",
      }}
    >
      <SuccessMessage message="Successfully signed in" show={showSuccess} />
      <LoginForm onSubmit={handleLogin} isLoading={isLoading} />
    </AuthTemplate>
  )
}

export default LoginView
