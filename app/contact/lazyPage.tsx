"use client";
import React, { lazy, Suspense } from "react";
import PageContainer from "../PageContainer";
import ContactIcon from "../../src/components/svg_Icon/Contact";
import dynamic from "next/dynamic";
import Loader from "../../src/components/loader/Loader";
const DrivingProvider = dynamic(
    () => import("../../src/utils/context/DrivingContext"),
    {
        ssr: false,
        loading: () => <Loader />,
    }
);
const ContactHome = lazy(() => import("../../src/home/contact-section"));
const LazyPage = () => {
    return (
        <DrivingProvider>
            <Suspense fallback={<Loader />}>
                <PageContainer
                    id="contact"
                    title="Contact"
                    icon={<ContactIcon />}
                >
                    <ContactHome />
                </PageContainer>
            </Suspense>
        </DrivingProvider>
    );
};
export default LazyPage;
