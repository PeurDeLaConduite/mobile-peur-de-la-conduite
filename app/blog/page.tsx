// app/blog/page.tsx
import { Metadata } from "next";
import PageLazyLoader from "@components/PageLazyLoader";
import dynamic from "next/dynamic";
const LazyPage = dynamic(() => import("./lazyPage"), {
    loading: () => null,
    ssr: true,
});
export const metadata: Metadata = {
    title: "Blog",
    alternates: {
        canonical: "https://peur-de-la-conduite.fr/blog",
        media: {
            "only screen and (max-width: 900px)":
                "https://mobile.peur-de-la-conduite.fr/blog",
            "only screen and (min-width: 900px)":
                "https://desktop.peur-de-la-conduite.fr/blog",
        },
    },
    description:
        "Découvrez une série d’articles dédiés à la peur de la conduite : conseils pour surmonter l’amaxophobie, gérer le stress au volant, réussir le permis et retrouver confiance.",
};

export default async function Page() {
    return (
        <PageLazyLoader>
            <LazyPage />
        </PageLazyLoader>
    );
}
