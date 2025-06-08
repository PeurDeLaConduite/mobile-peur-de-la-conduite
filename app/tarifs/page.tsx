import { Metadata } from "next";
import React from "react";
import LazyPage from "./lazyPage";
export const metadata: Metadata = {
    title: "Nos Tarifs",
};
export default function Page() {
    return <LazyPage />;
}
