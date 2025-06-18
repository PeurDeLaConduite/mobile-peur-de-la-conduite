import { Metadata } from "next";
import PageLazyLoader from "@components/PageLazyLoader";
import dynamic from "next/dynamic";
const LazyPage = dynamic(() => import("./lazyPage"), {
    loading: () => null,
    ssr: true,
});

export const metadata: Metadata = {
    title: "Informations-légales",
    alternates: {
        canonical: "https://peur-de-la-conduite.fr/informations-legales",
        media: {
            "only screen and (max-width: 900px)":
                "https://mobile.peur-de-la-conduite.fr/informations-legales",
            "only screen and (min-width: 900px)":
                "https://desktop.peur-de-la-conduite.fr/informations-legales",
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
