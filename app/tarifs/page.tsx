import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tarifs",
    description: "Découvrez nos tarifs de coaching à la conduite sur le Havre : des formules accessibles dès 39,99€ par séance pour surmonter la peur de conduire, gérer le stress avant examen, se perfectionner et progresser en toute confiance.",
    alternates: {
        canonical: "https://peur-de-la-conduite.fr/tarifs",
        media: {
            "only screen and (max-width: 900px)": "https://mobile.peur-de-la-conduite.fr/tarifs",
            "only screen and (min-width: 900px)": "https://desktop.peur-de-la-conduite.fr/tarifs",
        },
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Tarifs | Peur de la conduite",
        description: "Découvrez les tarifs de nos coachings personnalisés pour vaincre la peur de la conduite : gestion du stress, perfectionnement, conduite accompagnée et coaching anti-amaxophobie au Havre.",
        url: "https://peur-de-la-conduite.fr/tarifs",
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

export default function Page() {
    return (
        <PageLazyLoader>
            <LazyPage />
        </PageLazyLoader>
    );
}
