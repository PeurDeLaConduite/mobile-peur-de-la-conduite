import { Metadata } from "next";
import PageLazyLoader from "@components/PageLazyLoader";
import dynamic from "next/dynamic";
const LazyPage = dynamic(() => import("./lazyPage"), {
    loading: () => null,
    ssr: true,
});
export const metadata: Metadata = {
    title: "Réservation",
    alternates: {
        canonical: "https://peur-de-la-conduite.fr/reservation",
        media: {
            "only screen and (max-width: 900px)":
                "https://mobile.peur-de-la-conduite.fr/reservation",
            "only screen and (min-width: 900px)":
                "https://desktop.peur-de-la-conduite.fr/reservation",
        },
    },
};

export default async function Page() {
    // await new Promise((r) => setTimeout(r, 1000));
    return (
        <PageLazyLoader>
            <LazyPage />
        </PageLazyLoader>
    );
}
