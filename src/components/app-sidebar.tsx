"use client"

import * as React from "react"
import {
  SquareTerminal,
  User,
  Info,
  Settings2,
  MessageCircleQuestion,
} from "lucide-react"
import { usePathname } from "next/navigation"
import { NavMain } from "@/components/nav-main"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { JarvisLogoHomeButton } from "./jarvis-logo"

const navMain = [
  {
    title: "Apps",
    url: "#",
    icon: SquareTerminal,
    isActive: true,
  },
  {
    title: "Plex Request",
    url: "#",
    icon: MessageCircleQuestion,
    isActive: false,
  },
]

const accountNav = [
  {
    title: "Account",
    icon: User,
    isActive: true,
    url: "#",
    items: [
      {
        title: "Information",
        url: "#",
        icon: Info,
      },
      {
        title: "Settings",
        url: "#",
        icon: Settings2,
      },
    ],
  },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathName = usePathname()
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                <JarvisLogoHomeButton />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">Jarvis</span>
                <span className="truncate text-xs">Dashboard</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain
          items={pathName.startsWith("/account") ? accountNav : navMain}
        />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
