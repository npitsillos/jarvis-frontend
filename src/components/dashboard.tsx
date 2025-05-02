"use client"
import { AppSidebar } from "@/components/app-sidebar"
import { UserAvatar } from "@/components/user-avatar"
import { ModeToggle } from "@/components/mode-toggle"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center justify-between gap-2 px-4">
            <SidebarTrigger />
          </div>
          <div className="px-4 flex gap-2">
            <ModeToggle />
            <UserAvatar />
          </div>
        </header>
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}
