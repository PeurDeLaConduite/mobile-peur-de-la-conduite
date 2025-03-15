import { Metadata } from "next";
import { servicesData } from "../../src/home/service/Component/servicesData";
import React from "react";
export const metadata: Metadata = {
    title: "Nos Tarifs",
};
import Tarifs from "../../src/components/svg_Icon/Tarifs";
export default function Page() {
    return (
        <section className="section page" id="prices">
            <div className="fixed-menu"></div>
            <div className="container">
                <div className="page-title">
                    <Tarifs />
                    <h1 className="title">Tarifs des Prestations</h1>
                </div>

                {Object.values(servicesData).map((category) => (
                    <React.Fragment key={category.id}>
                        <div className="fixed-menu"></div>
                        <section className="category" id={category.ref}>
                            <h2 className="category-title">{category.title}</h2>
                            <p className="category-intro">{category.intro}</p>

                            {category.services.map((service, index) => (
                                <div
                                    className="packs-container"
                                    key={index + "trf"}
                                >
                                    <div className="price-title">
                                        <div className="coach">
                                            <p>Coaching</p>
                                            <div className="service-image">
                                                <img
                                                    src={service.imgSrc}
                                                    alt={service.imgAlt}
                                                />
                                            </div>
                                        </div>
                                        <div className="coach2">
                                            <div className="empty"></div>

                                            <h3>{service.title}</h3>
                                        </div>
                                    </div>
                                    <div className="price-card">
                                        <table className="price-table">
                                            <thead>
                                                <tr>
                                                    <th>Nb de Séances</th>
                                                    <th>Prix Total (€)</th>
                                                    <th>Prix Séance (€)</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {category.prices.map(
                                                    (price, idx) => (
                                                        <tr key={idx}>
                                                            <td className="nb-sessions">
                                                                {price.sessions}
                                                            </td>
                                                            <td className="text-center">
                                                                {price.total.toFixed(
                                                                    2
                                                                )}
                                                                €
                                                            </td>
                                                            <td className="text-center">
                                                                {price.perSession.toFixed(
                                                                    2
                                                                )}
                                                                €
                                                            </td>
                                                        </tr>
                                                    )
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            ))}
                        </section>
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
}
