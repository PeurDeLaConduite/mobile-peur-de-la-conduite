import dynamic from "next/dynamic";
import LazyWrapper from "@/src/components/LazyWrapper";
const LazyClientLayout = dynamic(() => import("./ClientLayout2"));

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <LazyWrapper>
            <LazyClientLayout>{children}</LazyClientLayout>
        </LazyWrapper>
    );
};

export default ClientLayout;
