"use client";
import React, { lazy, Suspense } from "react";
import PageContainer from "../PageContainer";
import ServicesIcon from "../../src/components/svg_Icon/Services";
import dynamic from "next/dynamic";
import { servicesData } from "../../src/home/service/Component/servicesData";
import Loader from "../../src/components/loader/Loader";
const DrivingProvider = dynamic(
    () => import("../../src/utils/context/DrivingContext"),
    {
        ssr: false,
        loading: () => <Loader />,
    }
);
const CategorySection = lazy(() =>
    import("@src/components/Service/CategorySection")
);
const LazyPage = () => {
    return (
        <DrivingProvider>
            <Suspense fallback={<Loader />}>
                <PageContainer
                    id="services-page"
                    title="Nos Services"
                    icon={<ServicesIcon />}
                >
                    {Object.values(servicesData).map((cat) => (
                        <CategorySection key={cat.id} category={cat} />
                    ))}
                </PageContainer>
            </Suspense>
        </DrivingProvider>
    );
};
export default LazyPage;
