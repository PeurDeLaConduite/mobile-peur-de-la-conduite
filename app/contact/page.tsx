import { Metadata } from "next";
import PageLazyLoader from "@components/PageLazyLoader";
import dynamic from "next/dynamic";
const LazyPage = dynamic(() => import("./lazyPage"), {
    loading: () => null, // déjà géré par PageLazyLoader
    ssr: true, // facultatif car true par défaut
});

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
    return (
        <PageLazyLoader>
            <LazyPage />
        </PageLazyLoader>
    );
}
