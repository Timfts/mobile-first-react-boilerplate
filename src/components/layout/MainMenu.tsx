import React from "react";
import { darken } from "polished";
import { colors } from "@theme/variables";

import MainMenuItem from "./MainMenuItem";

interface MainMenuProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const MainMenu: React.FC<MainMenuProps> = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div
      css={{
        backgroundColor: darken(0.1, colors["blue-teal"]),
        width: "100%",
        height: "100vh",
        zIndex: 1,
        position: "fixed",
        top: "-100%",
        transition: "transform 0.3s ease",
        transform: `translateY(${isMenuOpen ? "100%" : "0"})`,
        willChange: "transform",
        paddingTop: "80px",
      }}
    >
      <div
        css={{
          paddingTop: "80px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <MainMenuItem label="item 1" path="/second-page" />
        <MainMenuItem label="item 2" path="/second-page" />
        <MainMenuItem label="item 3" path="/second-page" />
      </div>
      p
    </div>
  );
};

export default MainMenu;
