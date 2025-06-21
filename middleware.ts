import { getSessionCookie } from "better-auth/cookies";
import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/profile", "/dashboard"];

export async function middleware(request: NextRequest) {
    const { nextUrl } = request;

    const sessionCookie = getSessionCookie(request);
    const isLoggedIn = !!sessionCookie;
    const isProtectedRoute = protectedRoutes.some(
        (route) => nextUrl.pathname === route || nextUrl.pathname.startsWith(`${route}/`),
    );
    const isAuthRoute = nextUrl.pathname.startsWith("/auth");

    if (isProtectedRoute && !isLoggedIn) {
        return NextResponse.redirect(new URL("/auth/signup", request.url));
    }
    if (isLoggedIn && isAuthRoute) {
        return NextResponse.redirect(new URL("/profile", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/profile", "/profile/:path*", "/dashboard", "/dashboard/:path*", "/auth/:path*"],
};
