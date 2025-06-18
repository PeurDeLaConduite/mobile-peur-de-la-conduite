import { Metadata } from "next";
import PageLazyLoader from "@components/PageLazyLoader";
import dynamic from "next/dynamic";
const LazyPage = dynamic(() => import("./lazyPage"), {
    loading: () => null,
    ssr: true,
});
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
export default function Page() {
    return (
        <PageLazyLoader>
            <LazyPage />
        </PageLazyLoader>
    );
}
