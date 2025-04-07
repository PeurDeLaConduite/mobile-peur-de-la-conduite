import Loader from "../../src/components/loader/Loader";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Réservation",
};

export default async function Page() {
    // await new Promise((r) => setTimeout(r, 1000));
    return (
        <section className="section" id="hs">
            <div className="fixed-menu"></div>
            <h2>Réservation</h2>
            {/* <p>
                Cette section n’est pas encore disponible. <Space />
                Merci de votre patience
            </p> */}
            <Loader />
        </section>
    );
}
