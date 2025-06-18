import Loader from "../../src/components/loader/Loader";

export default async function Page() {
    // await new Promise((r) => setTimeout(r, 1000));
    return (
        <section className="section" id="hs">
            <div className="fixed-menu"></div>
            <h2>Réservation</h2>

            <Loader />
        </section>
    );
}
