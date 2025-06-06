import { Metadata } from "next";
import Loader from "../../src/components/loader/Loader";
export const metadata: Metadata = {
    title: "Réservation",
};

export default async function Page() {
    return (
        <section className="section" id="s1">
            <div className="fixed-menu"></div>
            <Loader />
        </section>
    );
}
