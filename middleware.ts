import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const ua = request.headers.get("user-agent") ?? "";

  const isTablet =
    /(iPad|Tablet)/i.test(ua) || (/(Android)/i.test(ua) && !/Mobile/i.test(ua));
  const isMobile =
    !isTablet &&
    /Mobi|Android|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);

  if (!isMobile) {
    // ➜ Redirection vers le site desktop
    return NextResponse.redirect(
      new URL(request.nextUrl.pathname + request.nextUrl.search, "https://peur-de-la-conduite.fr"),
      302
    );
  }

  // Sinon (mobile) on laisse passer
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|img|css|api|robots.txt|sitemap.xml|favicon.ico).*)"],
};
