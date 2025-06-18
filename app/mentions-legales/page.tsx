import { Metadata } from "next";
import PageLazyLoader from "@components/PageLazyLoader";
import dynamic from "next/dynamic";
const LazyPage = dynamic(() => import("./lazyPage"), {
    loading: () => null,
    ssr: true,
});
export const metadata: Metadata = {
    title: "Mentions-légales",
    alternates: {
        canonical: "https://peur-de-la-conduite.fr/mentions-legales",
        media: {
            "only screen and (max-width: 900px)":
                "https://mobile.peur-de-la-conduite.fr/mentions-legales",
            "only screen and (min-width: 900px)":
                "https://desktop.peur-de-la-conduite.fr/mentions-legales",
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
