import { Metadata } from "next";
import PageContainer from "../PageContainer";
import ContactIcon from "../../src/components/svg_Icon/Contact";
import LazyPage from "./lazyPage";
export const metadata: Metadata = {
    title: "Contact",
};

export default function Page() {
    return (
        <PageContainer id="contact" title="Contact" icon={<ContactIcon />}>
            <div className="fixed-menu"></div>
            <LazyPage />
        </PageContainer>
    );
}
