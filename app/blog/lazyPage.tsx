// app/blog/page.tsx
import React, { lazy } from "react";
import LazyWrapper from "@/src/components/LazyWrapper";
import PageContainer from "../PageContainer";
import BlogIcon from "@components/svg_Icon/Blog";
const BlogClientWrapper = lazy(() => import("./BlogClientWrapper"));

export default async function Page() {
    return (
        <PageContainer id="blog" title="Blog" icon={<BlogIcon />}>
            <LazyWrapper>
                <BlogClientWrapper />
            </LazyWrapper>
        </PageContainer>
    );
}
