// app/blog/page.tsx
import { Metadata } from "next";
import PageContainer from "../PageContainer";
import BlogClientWrapper from "./BlogClientWrapper";
import BlogIcon from "@components/svg_Icon/Blog";

export const metadata: Metadata = {
    title: "Blog",
};

export default async function Page() {
    return (
        <PageContainer id="blog" title="Blog" icon={<BlogIcon />}>
            <BlogClientWrapper />
        </PageContainer>
    );
}
