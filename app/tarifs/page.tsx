import { Metadata } from "next";
import { servicesData } from "../../src/home/service/Component/servicesData";
import React from "react";
import PageContainer from "../PageContainer";
export const metadata: Metadata = {
    title: "Nos Tarifs",
};
import TarifsIcon from "../../src/components/svg_Icon/Tarifs";
export default function Page() {
    return (
        <PageContainer id="prices" title="Nos Tarifs" icon={<TarifsIcon />}>
            {Object.values(servicesData).map((category) => (
                <React.Fragment key={category.id}>
                    <div className="fixed-menu"></div>
                    <section className="category" id={category.ref}>
                        <h2 className="category-tle">{category.title}</h2>
                        <p className="category-intro">{category.intro}</p>

                        {category.services.map((service, index) => (
                            <div className="pck-Ct" key={index + "trf"}>
                                <div className="price-tle">
                                    <div className="coach">
                                        <p>Coaching</p>
                                        <div className="srv-image">
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
                                    <table className="price-tbl">
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
        </PageContainer>
    );
}
