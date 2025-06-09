import { Metadata } from "next";
import LazyPage from "./lazyPage";
export const metadata: Metadata = {
    title: "Contact",
    alternates: {
        canonical: "https://peur-de-la-conduite.fr/contact",
        media: {
            "only screen and (max-width: 900px)":
                "https://mobile.peur-de-la-conduite.fr/contact",
            "only screen and (min-width: 900px)":
                "https://desktop.peur-de-la-conduite.fr/contact",
        },
    },
};

export default function Page() {
    return <LazyPage />;
}
