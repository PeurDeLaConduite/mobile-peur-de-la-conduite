import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services",
    description: "Découvrez nos services de coaching en conduite au Havre : gestion du stress avant examen, conduite accompagnée, perfectionnement, maîtrise de la trajectoire ! de la trajectoire, situations difficiles, concentration, et coaching anti-amaxophobie. Programmes pour conducteurs débutants et confirmés.",
    alternates: {
        canonical: "https://peur-de-la-conduite.fr/services",
        media: {
            "only screen and (max-width: 900px)": "https://mobile.peur-de-la-conduite.fr/services",
            "only screen and (min-width: 900px)": "https://desktop.peur-de-la-conduite.fr/services",
        },
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Services | Peur de la conduite",
        description: "Gestion du stress, conduite accompagnée, concentration, maîtrise de la trajectoire et coaching anti-amaxophobie au Havre. Découvrez nos programmes personnalisés pour conducteurs débutants et confirmés.",
        url: "https://peur-de-la-conduite.fr/services",
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
