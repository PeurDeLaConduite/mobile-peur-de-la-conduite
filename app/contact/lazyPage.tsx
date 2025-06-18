import React, { lazy } from "react";
import LazyWrapper from "@/src/components/LazyWrapper";
import PageContainer from "../PageContainer";
import ContactIcon from "../../src/components/svg_Icon/Contact";
import DrivingLazyWrapper from "@src/components/DrivingLazyWrapper";
const ContactHome = lazy(() => import("../../src/home/contact-section"));

const LazyPage = () => {
    return (
        <LazyWrapper>
            <DrivingLazyWrapper>
                <PageContainer
                    id="contact"
                    title="Contact"
                    icon={<ContactIcon />}
                >
                    <ContactHome />
                </PageContainer>
            </DrivingLazyWrapper>
        </LazyWrapper>
    );
};
export default LazyPage;
