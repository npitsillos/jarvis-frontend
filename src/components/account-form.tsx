import type { User } from "@/lib/auth/auth-context"
import { User as UserIcon, Settings } from "lucide-react"
import { z } from "zod"

// const accountSchema = z.object({
//   email: z.string().email(),
// })

export function AccountForm({ user }: { user: User }) {}
