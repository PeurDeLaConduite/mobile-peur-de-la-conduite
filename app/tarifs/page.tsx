import { Metadata } from "next";
import PageLazyLoader from "@components/PageLazyLoader";
import dynamic from "next/dynamic";
const LazyPage = dynamic(() => import("./lazyPage"), {
    loading: () => null,
    ssr: true,
});
export const metadata: Metadata = {
    title: "Nos Tarifs",
    alternates: {
        canonical: "https://peur-de-la-conduite.fr/tarifs",
        media: {
            "only screen and (max-width: 900px)":
                "https://mobile.peur-de-la-conduite.fr/tarifs",
            "only screen and (min-width: 900px)":
                "https://desktop.peur-de-la-conduite.fr/tarifs",
        },
    },
};
export default function Page() {
    return (
        <PageLazyLoader>
            <LazyPage />
        </PageLazyLoader>
    );
}
