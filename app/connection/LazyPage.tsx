import Loader from "../../src/components/loader/Loader";

export default async function LazyPage() {
    return (
        <section className="section" id="hs">
            <div className="fixed-menu"></div>
            <h2>Connexion</h2>
            <Loader />
        </section>
    );
}
