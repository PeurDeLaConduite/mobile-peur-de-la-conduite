import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Nos Tarifs",
};
const services = [
    {
        title: "Stress avant examen",
        prices: [
            { sessions: 1, total: 49.99, perSession: 49.99 },
            { sessions: 3, total: 139.99, perSession: 46.66 },
            { sessions: 5, total: 224.99, perSession: 44.99 },
            { sessions: 10, total: 399.99, perSession: 39.99 },
        ],
    },
    {
        title: "Amaxophobie",
        prices: [
            { sessions: 1, total: 59.99, perSession: 59.99 },
            { sessions: 3, total: 169.99, perSession: 56.66 },
            { sessions: 5, total: 279.99, perSession: 55.99 },
            { sessions: 10, total: 499.99, perSession: 49.99 },
        ],
    },
];
export default function Page() {
    return (
        <section className="section tarfifs" id="prices">
            <div className="fixed-menu"></div>
            <div className="container">
                <h1 className="title">Tarifs des Prestations</h1>

                <section className="packs">
                    <div className="packs-container">
                        {services.map((service, index) => (
                            <div key={index + "trf"} className="price-card">
                                <h2 className="price-title">
                                    Coaching<span>{service.title}</span>
                                </h2>
                                <table className="price-table">
                                    <thead>
                                        <tr>
                                            <th>Nb de Séances</th>
                                            <th>Prix Total (€)</th>
                                            <th>Prix Séance (€)</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {service.prices.map((price, idx) => (
                                            <tr key={idx + "trf-col"}>
                                                <td className="nb-sessions">
                                                    {price.sessions}
                                                </td>
                                                <td className="text-center">
                                                    {price.total.toFixed(2)}€
                                                </td>
                                                <td className="text-center">
                                                    {price.perSession.toFixed(
                                                        2
                                                    )}
                                                    €
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </section>
    );
}
