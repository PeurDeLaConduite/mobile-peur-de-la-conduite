// src/components/Blog/SectionCard.tsx
import React from "react";
import { Section, Post, Author } from "@src/types/blog";
import BlogList from "./BlogList";
import ButtonLink from "../button/ButtonLink";

interface SectionCardProps {
    section: Section;
    posts: Post[];
    authors: Author[];
}

export default function BlogSectionCard({
    section,
    posts,
    authors,
}: SectionCardProps) {
    // Génère un ID unique pour le titre de la section
    const headingId = `section-tle-${section.slug}`;

    return (
        <section className="sct-C" aria-labelledby={headingId}>
            <div className="sct-C-hd">
                <h2 className="sct-C-tle" id={headingId}>
                    {section.title}
                </h2>
                <p className="sct-C-desc">{section.description}</p>
                <div className="sct-C-link">
                    <ButtonLink href={`/blog/sections/${section.slug}`}>
                        Tous les articles !
                    </ButtonLink>
                </div>
            </div>
            <div className="sct-C-content">
                <BlogList posts={posts} authors={authors} />
            </div>
        </section>
    );
}
