"use client";
import { lazy, Suspense } from "react";
const ScrollSectionsWrapper = lazy(() => import("./ScrollSectionsWrapper"));
const ScrollProvider = lazy(() => import("../src/utils/context/ScrollContext"));
import Loader from "../src/components/loader/Loader";
const ClientLayout2 = ({ children }: { children: React.ReactNode }) => {
    return (
        <Suspense fallback={<Loader />}>
            <ScrollProvider>
                <ScrollSectionsWrapper>{children}</ScrollSectionsWrapper>
            </ScrollProvider>
        </Suspense>
    );
};

export default ClientLayout2;
