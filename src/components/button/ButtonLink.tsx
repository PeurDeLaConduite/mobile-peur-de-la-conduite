import React from "react";
import Link from "next/link";

const ButtonLink = ({
    children,
    href,
}: Readonly<{
    children: React.ReactNode;
    href: string;
}>) => {
    return (
        <Link className="btn-SB flx-c" href={href}>
            {children}
        </Link>
    );
};

export default ButtonLink;
