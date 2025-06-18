import { lazy } from "react";
import LazyWrapper from "@/src/components/LazyWrapper";
import PageContainer from "../PageContainer";
import TarifsIcon from "../../src/components/svg_Icon/Tarifs";
import { servicesData } from "../../src/home/service/Component/servicesData";
import DrivingLazyWrapper from "@src/components/DrivingLazyWrapper";

const PriceSection = lazy(() => import("@src/components/Tarifs/PriceSection"));
const LazyPage = () => {
    return (
        <LazyWrapper>
            <DrivingLazyWrapper>
                <PageContainer
                    id="prices"
                    title="Nos Tarifs"
                    icon={<TarifsIcon />}
                >
                    {Object.values(servicesData).map((cat) => (
                        <PriceSection key={cat.id + "PriceId"} category={cat} />
                    ))}
                </PageContainer>
            </DrivingLazyWrapper>
        </LazyWrapper>
    );
};
export default LazyPage;
