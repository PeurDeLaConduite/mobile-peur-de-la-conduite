import { Metadata } from "next";
import LazyPage from "./lazyPage";
export const metadata: Metadata = {
    title: "Services",
};
import React from "react";
export default function Page() {
    return <LazyPage />;
}
