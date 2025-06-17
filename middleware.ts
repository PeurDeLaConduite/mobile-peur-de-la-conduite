import { NextResponse, type NextRequest } from "next/server";

const allowedOrigins = [
    "https://mobile.peur-de-la-conduite.fr",
    "https://desktop.peur-de-la-conduite.fr",
    "https://peur-de-la-conduite.fr",
];

export function middleware(request: NextRequest) {
    const ua = request.headers.get("user-agent") || "";
    const isBot = /bot|crawl|slurp|spider|mediapartners/i.test(ua);

    if (isBot) return NextResponse.next();

    const origin = request.headers.get("origin") || "";

    const isTablet =
        /(iPad|Tablet)/i.test(ua) ||
        (/(Android)/i.test(ua) && !/Mobile/i.test(ua));

    const isMobile =
        !isTablet &&
        /Mobi|Android|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);

    let response: NextResponse;

    if (!isMobile) {
        const destination = `https://desktop.peur-de-la-conduite.fr${request.nextUrl.pathname}${request.nextUrl.search}`;
        response = NextResponse.redirect(destination);
        response.cookies.set("deviceType", "desktop", {
            path: "/",
            domain: ".peur-de-la-conduite.fr",
            httpOnly: true,
            secure: true,
            sameSite: "strict",
        });
    } else {
        response = NextResponse.next();
        response.cookies.set("deviceType", "mobile", {
            path: "/",
            domain: ".peur-de-la-conduite.fr",
            httpOnly: true,
            secure: true,
            sameSite: "strict",
        });
    }

    // Gestion dynamique des headers CORS
    if (allowedOrigins.includes(origin)) {
        response.headers.set("Access-Control-Allow-Origin", origin);
        response.headers.set("Access-Control-Allow-Credentials", "true");
        response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
        response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
    }

    // Gestion OPTIONS (preflight CORS)
    if (request.method === "OPTIONS") {
        return new NextResponse(null, { status: 200, headers: response.headers });
    }

    return response;
}

export const config = {
    matcher: ["/", "/((?!_next|api|robots.txt|sitemap.xml|favicon.ico).*)"],
};
