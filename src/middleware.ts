import { NextRequest, NextResponse } from "next/server"
import { authMiddleware } from "./lib/auth/middleware"

type Middleware = (req: NextRequest) => NextResponse | Promise<NextResponse>

function composedMiddleware(middlewares: Middleware[]) {
  return async function (req: NextRequest) {
    for (const middleware of middlewares) {
      const res = await middleware(req)
      if (res && res !== NextResponse.next()) {
        return res
      }
    }
    return NextResponse.next()
  }
}

export const middleware = composedMiddleware([authMiddleware])

export const config = {
  matcher:
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
}
