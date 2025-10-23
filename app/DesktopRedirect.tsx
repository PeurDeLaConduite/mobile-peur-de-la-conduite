// "use client";

// import { useEffect } from "react";

// export default function DesktopRedirect() {
//     useEffect(() => {
//         if (typeof window === "undefined") return;

//         const isDesktop = window.innerWidth >= 900;
//         if (!isDesktop) return;

//         // Définir le cookie deviceType=desktop (visible côté serveur)
//         document.cookie = [
//             "deviceType=desktop",
//             "Path=/",
//             "Domain=.peur-de-la-conduite.fr",
//             "Secure",
//             "SameSite=Strict",
//             "Max-Age=" + 60 * 60 * 24 * 30, // 30 jours
//         ].join("; ");

//         // Redirection immédiate vers la version desktop
//         window.location.href =
//             "https://peur-de-la-conduite.fr" +
//             window.location.pathname +
//             window.location.search +
//             window.location.hash;
//     }, []);

//     return null;
// }
