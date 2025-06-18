import { lazy } from "react";
import LazyWrapper from "@/src/components/LazyWrapper";
import { Metadata } from "next";
import Slider from "../src/home/slider/Slider";

export const metadata: Metadata = {
    title: "Accueil | Peur de la conduite",
};
const About = lazy(() => import("../src/home/about"));
const HomeOut = lazy(() => import("./HomeOut"));
export default function Home() {
    return (
        <>
            <section className="section slider-bg" id="slider">
                <Slider />
            </section>
            <section className="section about-bg" id="about">
                <div className="fixed-menu"></div>

                <LazyWrapper>
                    <About />
                </LazyWrapper>
            </section>
            <HomeOut />
        </>
    );
}
