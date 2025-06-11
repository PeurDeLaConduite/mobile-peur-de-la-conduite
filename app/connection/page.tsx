import { Metadata } from "next";
import Loader from "../../src/components/loader/Loader";
export const metadata: Metadata = {
    title: "Réservation",
    alternates: {
        canonical: "https://peur-de-la-conduite.fr/connection",
        media: {
            "only screen and (max-width: 900px)":
                "https://mobile.peur-de-la-conduite.fr/connection",
            "only screen and (min-width: 900px)":
                "https://desktop.peur-de-la-conduite.fr/connection",
        },
    },
};

export default async function Page() {
    return (
        <section className="section" id="hs">
            <div className="fixed-menu"></div>
            <h2>Connexion</h2>
            <Loader />
        </section>
    );
}
