"use client";

import { useEffect } from "react";

export default function DesktopRedirect() {
    useEffect(() => {
        if (typeof window === "undefined") return; // sécurité côté SSR

        if (window.innerWidth < 900) {
            return; 
        }    
        window.location.href =
            "https://desktop.peur-de-la-conduite.fr" +
            window.location.pathname +
            window.location.search +
            window.location.hash;
    }, []);

    return null;
}
