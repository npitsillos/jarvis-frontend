import type { ReactNode } from "react"
import Dashboard from "@/components/dashboard"

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return <Dashboard>{children}</Dashboard>
}

export default DashboardLayout
