import { Metadata } from "next";
import LazyPage from "./lazyPage";
export const metadata: Metadata = {
    title: "Contact",
};

export default function Page() {
    return <LazyPage />;
}
