import { Metadata } from "next";
import { servicesData } from "../../src/home/service/Component/servicesData";
import PageContainer from "../PageContainer";
export const metadata: Metadata = {
    title: "Services",
};
import React from "react";
import ServicesIcon from "../../src/components/svg_Icon/Services";
export default function Page() {
    return (
        <PageContainer
            id="services-page"
            title="Nos Services"
            icon={<ServicesIcon />}
        >
            {Object.values(servicesData).map((category) => (
                <React.Fragment key={category.id}>
                    <div id={category.ref}>
                        <div className="fixed-menu"></div>
                        <section className="category">
                            <h2 className="category-tle">{category.title}</h2>
                            <p className="category-intro">{category.intro}</p>

                            {category.services.map((service, index) => (
                                <article
                                    key={index + "trf"}
                                    className="pck-Ct"
                                    id={service.id}
                                >
                                    <div className="margin-srv"></div>
                                    <div className="srvP_C-tle">
                                        <div className="srvP-img">
                                            <img
                                                src={service.imgSrc}
                                                alt={service.imgAlt}
                                            />
                                        </div>
                                        <div className="srvP-h3">
                                            <h3>{service.title}</h3>
                                        </div>
                                    </div>

                                    <div className="srvP_bull-card">
                                        <div className="bull-bd">
                                            <img
                                                src="/img/utils/bulle-bd.svg"
                                                alt={service.imgAlt}
                                                width={24}
                                                height={25}
                                            />
                                        </div>
                                        <p className="srv-desrib">
                                            {service.description}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </section>
                    </div>
                </React.Fragment>
            ))}
        </PageContainer>
    );
}
