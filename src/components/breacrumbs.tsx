"use client"
import { usePathname } from "next/navigation"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbLink,
  BreadcrumbItem,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"

export default function Breadcrumbs() {
  const pathName = usePathname()
  if (pathName === "/") {
    return (
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbPage>Apps</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    )
  }

  const betweenPaths = pathName.split("/").slice(1, -1)
  const lastPage = pathName.split("/").at(-1)?.split("-") ?? []
  let pageName = ""
  for (const word of lastPage) {
    pageName += word.charAt(0).toUpperCase() + word.slice(1) + " "
  }

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {betweenPaths.length === 0 ? (
          <>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="/">Apps</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
          </>
        ) : (
          betweenPaths.map((path) => (
            <>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href={`/${path}`}>{path}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
            </>
          ))
        )}

        <BreadcrumbItem>
          <BreadcrumbPage>{pageName}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
