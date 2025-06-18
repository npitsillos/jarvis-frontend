"use client"

import { BadgeCheck, Bell, LogOut } from "lucide-react"
import {
  Avatar,
  AvatarFallback,
  //   AvatarImage,
} from "@/components/ui/avatar"
import { useAuth } from "@/lib/auth/auth-context"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Skeleton } from "./ui/skeleton"
import { useState } from "react"
import { useRouter } from "next/navigation"

export function UserNav() {
  const { user, loading, logout } = useAuth()
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const handleClick = () => {
    setOpen(false)
    router.push("/account")
  }
  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Avatar className="h-[36px] w-[36px] rounded-lg">
          {/* {loading} ? <Skeleton className="h-12 w-12 rounded-full" /> : <AvatarImage src={user.avatar} alt={user.name} /> */}
          {loading ? (
            <Skeleton className="h-12 w-12 rounded-full" />
          ) : user ? (
            <AvatarFallback className="rounded-lg h-[36px] w-[36px]">
              {user.first_name.charAt(0)}
            </AvatarFallback>
          ) : (
            <Skeleton className="h-12 w-12 rounded-full" />
          )}
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
        side="bottom"
        align="end"
        sideOffset={4}
      >
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <Avatar className="h-8 w-8 rounded-lg">
              {/* {loading} ? <Skeleton className="h-12 w-12 rounded-full" /> : <AvatarImage src={user.avatar} alt={user.name} /> */}
              {loading ? (
                <Skeleton className="h-12 w-12 rounded-full" />
              ) : user ? (
                <AvatarFallback className="rounded-lg">
                  {user.first_name.charAt(0)}
                </AvatarFallback>
              ) : (
                <Skeleton className="h-12 w-12 rounded-full" />
              )}
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              {loading ? (
                <Skeleton className="h-4 w-[250px]" />
              ) : user ? (
                <span className="truncate font-medium">{user.first_name}</span>
              ) : (
                <Skeleton className="h-4 w-[250px]" />
              )}
              {loading ? (
                <Skeleton className="h-4 w-[250px]" />
              ) : user ? (
                <span className="truncate font-medium">{user.email}</span>
              ) : (
                <Skeleton className="h-4 w-[250px]" />
              )}
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => handleClick()}>
            <BadgeCheck />
            Account
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleClick()}>
            <Bell />
            Notifications
            <span>
              {
                user?.notifications.filter(
                  (notification) => notification.viewed
                ).length
              }
            </span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => logout()}>
          <LogOut />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
