"use client"
import { AppSidebar } from "@/components/app-sidebar"
import { UserNav } from "@/components/user-nav"
import { ModeToggle } from "@/components/mode-toggle"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

import Breadcrumbs from "./breacrumbs"
import { usePathname } from "next/navigation"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathName = usePathname()
  if (pathName.startsWith("/login") || pathName.startsWith("/signup")) {
    return <>{children}</>
  }
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center justify-between gap-2 px-4">
            <SidebarTrigger />
            <Breadcrumbs />
          </div>
          <div className="px-4 flex gap-2">
            <ModeToggle />
            <UserNav />
          </div>
        </header>
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}
