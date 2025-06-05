// app/blog/sections/[slug]/SectionClient.tsx
"use client";
import { useMemo } from "react";
import PostContent from "@components/Blog/PostContent";
import { Section, Post, Author } from "@src/types/blog";

type Props = {
    section: Section;
    posts: Post[];
    authors: Author[];
};

export default function SectionClient({ section, posts, authors }: Props) {
    const postsInSection = useMemo(
        () =>
            posts.filter(
                (post) =>
                    post.status === "published" &&
                    post.sectionIds.includes(section.id)
            ),
        [posts, section.id]
    );

    return (
        <div className="sct-P sct-C">
            <div className="sct-C-hd">
                <h1 className="sct-C-tle">{section.title}</h1>
                <p className="sct-C-desc">{section.description}</p>
            </div>
            <div className="section-blog_bg">
                <div className="sct-P__posts">
                    {postsInSection.map((post) => {
                        const author = authors.find(
                            (a) => a.id === post.authorId
                        );
                        if (!author) return null;
                        return (
                            <PostContent
                                key={post.id}
                                post={post}
                                author={author}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
