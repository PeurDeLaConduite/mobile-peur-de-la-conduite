import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import VideoEmbed from "./VideoEmbed";
import ButtonLink from "../button/ButtonLink";
import { Post, Author } from "@/src/types/blog";
import AuthorSignature from "./AuthorSignature";
type Props = {
    post: Post;
    author: Author;
    hovered?: boolean;
    faded?: boolean;
    onHover?: () => void;
    onUnhover?: () => void;
    onFocus?: () => void;
    onBlur?: () => void;
};

function BlogCard({
    post,
    author,
    hovered,
    faded,
    onHover,
    onUnhover,
    onFocus,
    onBlur,
}: Props) {
    const router = useRouter();

    // Gestion du clic : évite les conflits avec liens internes
    const handleCardClick = (e: React.MouseEvent) => {
        if (
            (e.target as HTMLElement).closest("a") ||
            (e.target as HTMLElement).closest("button")
        ) {
            return;
        }
        router.push(`/blog/${post.slug}`);
    };

    // Accessibilité : activation clavier
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" || e.key === " ") {
            router.push(`/blog/${post.slug}`);
        }
    };

    return (
        <article
            className={`blg-C${hovered ? " cardHovered" : ""}${
                faded ? " cardFaded" : ""
            }`}
            aria-label={`Voir l'article : ${post.title}`}
            style={{ cursor: "pointer" }}
            onClick={handleCardClick}
            onKeyDown={handleKeyDown}
            onMouseEnter={onHover}
            onMouseLeave={onUnhover}
            onFocus={onFocus}
            onBlur={onBlur}
            tabIndex={0}
        >
            <div className="blg-C__H">
                <h3 className="bl-c_tle">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                {/* <div className="blg-C__cnt"> */}
                <p className="blg-C__excerpt">{post.excerpt}</p>
                {post.videoUrl && (
                    <div className="blg-C_V">
                        <VideoEmbed
                            url={post.videoUrl}
                            title={`Vidéo de ${post.title}`}
                            iframeAllow={false}
                            iframeTabIndex={-1}
                        />
                    </div>
                )}
                {/* </div> */}
                <div className="blg-C__footer">
                    <div className="blg-C__link">
                        <ButtonLink href={`/blog/${post.slug}`}>
                            Lire l&apos;article
                        </ButtonLink>
                    </div>
                    <AuthorSignature author={author} date={post.createdAt} />
                </div>
            </div>
        </article>
    );
}
// En toute fin de fichier :
export default React.memo(BlogCard);
