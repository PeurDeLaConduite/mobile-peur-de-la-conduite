"use client";
import React, { lazy, Suspense } from "react";
import dynamic from "next/dynamic";
import Loader from "../../src/components/loader/Loader";
const DrivingProvider = dynamic(
    () => import("../../src/utils/context/DrivingContext"),
    {
        ssr: false,
        loading: () => <div>Chargement des services...</div>,
    }
);
const ContactHome = lazy(() => import("../../src/home/contact-section"));
const LazyPage = () => {
    return (
        <DrivingProvider>
            <Suspense fallback={<Loader />}>
                <ContactHome />
            </Suspense>{" "}
        </DrivingProvider>
    );
};
export default LazyPage;
