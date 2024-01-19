import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isAuthenticated } from "./Utils/Auth";
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath =
    path == "/login" ||
    path == "/signup" ||
    path == "/verifyemail" ||
    path == "/forgotpass";
  const token = request.cookies.get("token")?.value || "";
  const protectedRoute = ["/admin"];
  if (!isAuthenticated && protectedRoute.includes(path)) {
    const absoluteURL = new URL("/profile", request.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}

export const config = {
  matcher: [
    "/",
    "/profile",
    "/login",
    "/signup",
    "/verifyemail",
    "/forgotpass",
    "/admin",
  ],
};
