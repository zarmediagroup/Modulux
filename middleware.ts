import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isMaintenanceMode } from "@/lib/maintenance";

const STATIC_FILE = /\.(ico|png|jpg|jpeg|gif|svg|webp|css|js|woff2?|txt|xml)$/;

export function middleware(request: NextRequest) {
  const host = request.headers.get("host");

  // Consolidate apex domain to www for canonical SEO
  if (host === "modulux.co.za") {
    const url = new URL(request.url);
    url.host = "www.modulux.co.za";
    url.protocol = "https:";
    return NextResponse.redirect(url, 301);
  }

  if (!isMaintenanceMode()) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    STATIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/maintenance";
  const response = NextResponse.rewrite(url);
  response.headers.set("x-maintenance", "1");
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
