import React from "react";
import { MenuItem } from "../../assets/data/menuItems";
import NavLink from "./NavLink";
import ConnectionButton from "../auth/ConnectionButton";

interface MenuListProps {
  menuItems: MenuItem[];
  openSubMenu: string | null;
  onNavigationClick: (path: string) => void;
  handleMenuClick: (menuItemId: string) => void;
}

const MenuList: React.FC<MenuListProps> = ({
  menuItems,
  openSubMenu,
  onNavigationClick,
  handleMenuClick
}) => {
  return (
    <nav className="main-nav">
      {menuItems.map(menuItem => {
        if (menuItem.id === "connection") {
          return <ConnectionButton key={menuItem.id} label={menuItem.title} />;
        }
        return (
          <NavLink
            key={menuItem.id}
            menuItem={menuItem}
            onNavigationClick={onNavigationClick}
            isOpen={openSubMenu === menuItem.id}
            handleMenuClick={handleMenuClick}
          />
        );
      })}
    </nav>
  );
};

export default React.memo(MenuList);
