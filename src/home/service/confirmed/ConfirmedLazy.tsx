import { lazy, Suspense } from "react";
import Loader from "../../../components/loader/Loader";

const Confirmed = lazy(() => import("./confirmed"));
const ConfirmedLazy = () => (
    <Suspense fallback={<Loader />}>
        <Confirmed />
    </Suspense>
);

export default ConfirmedLazy;
