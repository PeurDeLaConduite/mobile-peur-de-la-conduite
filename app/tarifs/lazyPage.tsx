"use client";
import React, { lazy, Suspense } from "react";
import PageContainer from "../PageContainer";
import TarifsIcon from "../../src/components/svg_Icon/Tarifs";
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
const PriceSection = lazy(() => import("@src/components/Tarifs/PriceSection"));
const LazyPage = () => {
    return (
        <DrivingProvider>
            <Suspense fallback={<Loader />}>
                <PageContainer
                    id="prices"
                    title="Nos Tarifs"
                    icon={<TarifsIcon />}
                >
                    {Object.values(servicesData).map((cat) => (
                        <PriceSection key={cat.id + "PriceId"} category={cat} />
                    ))}
                </PageContainer>
            </Suspense>
        </DrivingProvider>
    );
};
export default LazyPage;
