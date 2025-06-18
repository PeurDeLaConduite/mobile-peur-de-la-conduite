import { lazy } from "react";
import PageContainer from "../PageContainer";
import ServicesIcon from "../../src/components/svg_Icon/Services";
import { servicesData } from "../../src/home/service/Component/servicesData";
import DrivingLazyWrapper from "@src/components/DrivingLazyWrapper";
import LazyWrapper from "@/src/components/LazyWrapper";
const CategorySection = lazy(() =>
    import("@src/components/Service/CategorySection")
);
const LazyPage = () => {
    return (
        <DrivingLazyWrapper>
            <LazyWrapper>
                <PageContainer
                    id="services-page"
                    title="Nos Services"
                    icon={<ServicesIcon />}
                >
                    {Object.values(servicesData).map((cat) => (
                        <CategorySection key={cat.id} category={cat} />
                    ))}
                </PageContainer>
            </LazyWrapper>
        </DrivingLazyWrapper>
    );
};
export default LazyPage;
