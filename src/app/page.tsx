"use client"
import Dashboard from "@/components/dashboard"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
type AppListings = {
  name: string
  host: string
}
export default function Page() {
  const [appListings, setAppListings] = useState<AppListings[]>([])

  useEffect(() => {
    const fetchAppListings = async () => {
      console.log("fetching")
      const res = await fetch("/api/apps")
      const data: AppListings[] = await res.json()
      setAppListings(data)
    }
    fetchAppListings()
  }, [])

  if (!appListings) {
    return
  }

  return (
    <Dashboard>
      <div className="jutify-between px-2">
        {appListings.map((appListing, index) => (
          <Link key={index} href={`https://${appListing.host}`}>
            <Card className="w-[250px] transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-primary hover:ring-1 hover:ring-primary cursor-pointer">
              <CardHeader>
                <CardTitle className="flex gap-x-4">
                  <Image
                    className="h-8 w-8 object-contain rounded"
                    src={`/${appListing.name}.png`}
                    width={40}
                    height={40}
                    alt={appListing.name}
                  />
                  {appListing.name}
                </CardTitle>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </Dashboard>
  )
}
