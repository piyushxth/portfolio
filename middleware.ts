import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

// Public routes and APIs (prefixes)
const PUBLIC_PREFIXES = [
  "/", // includes root
  "/demo",
  "/login",
  "/signup",
  "/blog",
  "/projects",
  "/about",
  "/contact",
];

const PUBLIC_API_ROUTES = ["/api/public-data"];
const ADMIN_PREFIX = "/admin";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // ✅ Allow CORS preflight requests (OPTIONS)
  if (req.method === "OPTIONS") {
    return new NextResponse(null, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  }

  // ✅ Public route check
  const isPublicRoute = PUBLIC_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)
  );

  const isPublicApi = PUBLIC_API_ROUTES.includes(pathname);

  if (isPublicRoute || isPublicApi) {
    if (token) {
      if (pathname === "/login") {
        return NextResponse.redirect(
          new URL(token.role === "admin" ? "/admin" : "/", req.url)
        );
      }
      if (pathname === "/signup") {
        return new NextResponse(
          "You are logged in and cannot create a new account",
          { status: 403 }
        );
      }
    }
    return NextResponse.next();
  }

  // ✅ Require login for protected routes
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // ✅ Admin route protection
  if (pathname.startsWith(ADMIN_PREFIX) && token.role !== "admin") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|static|_next|.*\\..*).*)"],
};
