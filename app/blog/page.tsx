// app/blog/page.tsx
import { Metadata } from "next";
import PageContainer from "../PageContainer";
import BlogClientWrapper from "./BlogClientWrapper";
import BlogIcon from "@components/svg_Icon/Blog";

export const metadata: Metadata = {
    title: "Blog",
    alternates: {
        canonical: "https://peur-de-la-conduite.fr/blog",
        media: {
            "only screen and (max-width: 900px)":
                "https://mobile.peur-de-la-conduite.fr/blog",
            "only screen and (min-width: 900px)":
                "https://desktop.peur-de-la-conduite.fr/blog",
        },
    },
};

export default async function Page() {
    return (
        <PageContainer id="blog" title="Blog" icon={<BlogIcon />}>
            <BlogClientWrapper />
        </PageContainer>
    );
}
