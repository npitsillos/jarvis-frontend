'use client'
import { AppSidebar } from "@/components/app-sidebar"
import { UserAvatar } from "@/components/user-avatar"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center justify-between gap-2 px-4">
            <SidebarTrigger />
          </div>
          <div className="px-4"> 
            <UserAvatar/>
          </div>
        </header>
      </SidebarInset>
    </SidebarProvider>
  )
}
