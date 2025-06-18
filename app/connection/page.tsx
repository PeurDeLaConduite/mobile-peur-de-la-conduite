import { Metadata } from "next";
import PageLazyLoader from "@components/PageLazyLoader";
import dynamic from "next/dynamic";
const LazyPage = dynamic(() => import("./LazyPage"), {
    loading: () => null,
    ssr: true, 
});

export const metadata: Metadata = {
    title: "Réservation",
    alternates: {
        canonical: "https://peur-de-la-conduite.fr/connection",
        media: {
            "only screen and (max-width: 900px)":
                "https://mobile.peur-de-la-conduite.fr/connection",
            "only screen and (min-width: 900px)":
                "https://desktop.peur-de-la-conduite.fr/connection",
        },
    },
};

export default async function Page() {
    return (
        <PageLazyLoader>
            <LazyPage />
        </PageLazyLoader>
    );
}
