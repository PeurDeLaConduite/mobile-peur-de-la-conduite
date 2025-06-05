// src/components/button/ButtonPage.tsx
import React from "react";
import { BackButton } from "@components/button/Buttons";
// import Link from "next/link";

interface ButtonPageProps {
    href: string;
    className?: string;
}

const ButtonPage: React.FC<ButtonPageProps> = ({ href, className = "" }) => (
    <div className={`btn-P ${className}`.trim()}>
        <div className="center-fixed">
            <BackButton href={href} label={""} className="btn-P__back" />
        </div>
    </div>
);

export default ButtonPage;
