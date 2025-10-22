import { memo } from "react";

import {
    Tarifs as TarifsIcon,
    Home as HomeIcon,
    Logo as LogoIcon,
    Services as ServicesIcon,
    Blog as BlogIcon,
    Contact as ContactIcon,
    // Reservation as ReservationIcon,
    // Search as SearchIcon,
    // Connection as ConnectionIcon,
} from "../svg_Icon";

export const svgComponents = {
    Home: memo(HomeIcon),
    Logo: memo(LogoIcon),
    Services: memo(ServicesIcon),
    Blog: memo(BlogIcon),
    Tarifs: memo(TarifsIcon),
    Contact: memo(ContactIcon),
    // Reservation: memo(ReservationIcon),
    // Search: memo(SearchIcon),
    // connection: memo(ConnectionIcon),
} as const;

export type SvgIconName = keyof typeof svgComponents;
