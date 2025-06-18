"use client";
import React, { lazy, Suspense } from "react";
// import SliderIntro from "./SliderContentIntro";
import Loader from "@/src/components/loader/Loader";
// import LazyWrapper from "@/src/components/LazyWrapper";
const ClientSldProvider = lazy(() => import("./ClientSldProvider"));

const SliderContent = () => {
    return (
        <Suspense fallback={<Loader />}>
            <ClientSldProvider />
        </Suspense>
    );
};

export default SliderContent;
