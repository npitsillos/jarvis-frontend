import { useAuth } from "@/lib/auth/auth-context"
import { Skeleton } from "@/components/ui/skeleton"

export default function Page() {
  const { user, loading } = useAuth()
  return (
    <div className="flex flex-1 justify-center gap-4 p-4 pt-0">
      {loading ? (
        <Skeleton className="h-4 w-[250px]" />
      ) : (
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">{`${user?.first_name}' Account`}</h1>
      )}
    </div>
  )
}
