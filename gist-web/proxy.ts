import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((request) => {
  const isLoggedIn = !!request.auth;
  const { pathname } = request.nextUrl;

  const isLoginPage = pathname == "/login";
  const isProtectedRoute = pathname.startsWith("/home") || pathname === "/";

  if (!isLoggedIn && isProtectedRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isLoggedIn && isLoginPage) {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  return NextResponse.next();
});

// apply middleware on only important routes
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

export { auth as middleware } from "@/auth";
