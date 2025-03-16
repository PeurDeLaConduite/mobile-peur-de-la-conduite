import { lazy, Suspense } from "react";
import Loader from "../../../components/loader/Loader";

const Beginner = lazy(() => import("./beginner"));
const BeginnerLazy = () => (
    <Suspense fallback={<Loader />}>
        <Beginner />
    </Suspense>
);

export default BeginnerLazy;
