import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const ua = request.headers.get("user-agent") || "";
    const isBot = /bot|crawl|slurp|spider|mediapartners/i.test(ua);
    if (isBot) return NextResponse.next();

    const isTablet =
        /(iPad|Tablet)/i.test(ua) ||
        (/(Android)/i.test(ua) && !/Mobile/i.test(ua));

    const isMobile =
        !isTablet &&
        /Mobi|Android|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);

    if (!isMobile) {
        const destination = `https://desktop.peur-de-la-conduite.fr${request.nextUrl.pathname}${request.nextUrl.search}`;
        const response = NextResponse.redirect(destination);
        response.cookies.set("deviceType", "desktop", {
            path: "/",
            domain: ".peur-de-la-conduite.fr",
            httpOnly: true,
            secure: true,
            sameSite: "strict",
        });
        return response;
    }

    const response = NextResponse.next();
    response.cookies.set("deviceType", "mobile", {
        path: "/",
        domain: ".peur-de-la-conduite.fr",
        httpOnly: true,
        secure: true,
        sameSite: "strict",
    });

    return response;
}

export const config = {
    matcher: ["/", "/((?!_next|api|robots.txt|sitemap.xml|favicon.ico).*)"],
};
