import { Metadata } from "next";
import Loader from "../../src/components/loader/Loader";
import Space from "../../src/utils/Space";
export const metadata: Metadata = {
    title: "Réservation",
};

export default async function Page() {
    return (
        <section className="section" id="s1">
            <div className="fixed-menu"></div>
            <h2>Réservation</h2>
            <p>
                Cette section n’est pas encore disponible. <Space />
                Merci de votre patience
            </p>
            <Loader />
        </section>
    );
}
