import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const publicRouthes = ["/login", "/register"];

  const isPublicRoute = publicRouthes.includes(req.nextUrl.pathname);

  if (isPublicRoute) {
    return NextResponse.next();
  }

  const token = req.cookies.get("token")?.value;

  console.log("Token:", token);

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/books"],
};
