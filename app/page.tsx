import React, { lazy } from "react";
import { Metadata } from "next";
import Slider from "../src/home/slider/Slider";
import Loader from "../src/components/loader/Loader";

export const metadata: Metadata = {
    title: "Accueil | Peur de la conduite",
};
// import HomeOut from "./outPage";
const About = lazy(() => import("../src/home/about"));
const HomeOut = lazy(() => import("./outPage"));
export default function Home() {
    return (
        <>
            <section className="section slider-bg" id="slider">
                <Slider />
            </section>
            <section className="section about-bg" id="about">
                <div className="fixed-menu"></div>

                <React.Suspense fallback={<Loader />}>
                    <About />
                </React.Suspense>
            </section>
            <HomeOut />
        </>
    );
}
