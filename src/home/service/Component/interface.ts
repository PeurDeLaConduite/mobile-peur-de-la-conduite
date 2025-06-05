export interface ServiceItemProps {
    title: string;
    imgSrc: string;
    imgAlt: string;
    id: string;
}

export interface ServicecategoryProps {
    id: string;
    title: string;
    subtitle: string;
    intro: string;
    services: ServiceItemProps[];
}
