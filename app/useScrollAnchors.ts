import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useScrollContext } from "../src/utils/context/ScrollContext";
import {
    handleSectionIntersection,
    addNewUrl,
    updateSectionClasses,
} from "../src/utils/fnScrollUtils";

// sections parameter is kept for compatibility but current sections are detected dynamically
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useScrollAnchors = (_sections: { id: string }[]) => {
    const { setActiveSection } = useScrollContext();
    const pathname = usePathname();

    useEffect(() => {
        if (typeof window === "undefined") return;

        const nodes = Array.from(
            document.querySelectorAll<HTMLElement>("section[id]")
        );
        const currentSections = nodes.map((el) => ({ id: el.id }));

        const observer = new IntersectionObserver(
            (entries) => {
                handleSectionIntersection(entries);
                if (entries.some((e) => e.isIntersecting)) {
                    const activeEntry = entries.find((e) => e.isIntersecting);
                    if (
                        activeEntry &&
                        activeEntry.target instanceof HTMLElement
                    ) {
                        addNewUrl(activeEntry.target.id);
                        updateSectionClasses(currentSections, setActiveSection);
                    }
                }
            },
            { threshold: 0.5 }
        );

        currentSections.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) {
                observer.observe(el);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, [pathname, setActiveSection]);
};
