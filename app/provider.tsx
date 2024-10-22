"use client"
import { SessionProvider } from "next-auth/react"
import Btn from "./btn"

export default function Provider({ children }: { children: React.ReactNode }) {
  return <SessionProvider><Btn/>{children}</SessionProvider>
}

