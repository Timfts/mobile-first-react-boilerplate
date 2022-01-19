import React from "react";
import { colors } from "@theme/variables";

import HamburgerMenu from "@components/common/HamburgerButton";

interface HeaderProps {
  toggleMenu(...args: any): any;
  isMenuOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleMenu, isMenuOpen }) => {
  return (
    <header
      css={{
        color: colors["white"],
        backgroundColor: colors["blue-teal"],
        height: "80px",
        fontWeight: 500,
        position: "relative",
        zIndex: 2,
        display: "flex",
        alignItems: "center",
        padding: " 0 24px",
        justifyContent: "space-between",
      }}
    >
      React mobile-first boilerplate
      <div>
        <HamburgerMenu isOpen={isMenuOpen} onClick={toggleMenu} />
      </div>
    </header>
  );
};

export default Header;
