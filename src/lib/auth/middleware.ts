import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const PUBLIC_PATHS = ['/login', '/signup']

function isPublicRoute(pathName: string) {
  return PUBLIC_PATHS.some(path => pathName.startsWith(path))
}

export async function authMiddleware(request: NextRequest) {
  
  if (isPublicRoute(request.nextUrl.pathname)) {
    return NextResponse.next()
  }

  try {
    const res = await fetch('http://localhost:8000/users/me', {
      credentials: "include",
      headers: {
        cookie: request.headers.get('cookie') || '',
      },
    })
    if (res.ok) {
      return NextResponse.next()
    }
  } catch(error) {
    console.log("Fetch user error:", error)
  }

  return NextResponse.redirect(new URL('/login', request.url));
}