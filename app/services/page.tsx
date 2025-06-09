import { Metadata } from "next";
import LazyPage from "./lazyPage";
export const metadata: Metadata = {
    title: "Services",
    alternates: {
        canonical: "https://peur-de-la-conduite.fr/services",
        media: {
            "only screen and (max-width: 900px)":
                "https://mobile.peur-de-la-conduite.fr/services",
            "only screen and (min-width: 900px)":
                "https://desktop.peur-de-la-conduite.fr/services",
        },
    },
};
import React from "react";
export default function Page() {
    return <LazyPage />;
}
