// app/blog/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog | Peur de la conduite",
    description: "Découvrez des articles dédiés à la peur de conduire : conseils pratiques, gestion du stress, dépassement des blocages et préparation à la conduite en toute confiance. Par Mounir Bouakkaz, coaching conduite et anti-amaxophobie au Havre.",
    alternates: {
        canonical: "https://peur-de-la-conduite.fr/blog",
        media: {
            "only screen and (max-width: 900px)": "https://mobile.peur-de-la-conduite.fr/blog",
            "only screen and (min-width: 900px)": "https://desktop.peur-de-la-conduite.fr/blog",
        },
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Blog | Peur de la conduite",
        description: "Conseils et articles pour vaincre la peur de conduire, gérer le stress au volant et progresser en toute sérénité. Par Mounir Bouakkaz, coach conduite au Havre.",
        url: "https://peur-de-la-conduite.fr/blog",
        siteName: "Peur de la conduite",
        locale: "fr_FR",
        type: "website",
        images: [
            {
                url: "/img/about/avatar.webp",
                width: 225,
                height: 225,
                alt: "Mounir Bouakkaz - Coaching conduite au Havre",
            },
        ],
    },
    icons: {
        icon: [
            {
                url: "/img/favicon/logo.svg",
                type: "image/svg+xml",
            },
        ],
    },
};

import PageLazyLoader from "@components/PageLazyLoader";
import dynamic from "next/dynamic";
const LazyPage = dynamic(() => import("./lazyPage"), {
    loading: () => null,
    ssr: true,
});


export default async function Page() {
    return (
        <PageLazyLoader>
            <LazyPage />
        </PageLazyLoader>
    );
}
