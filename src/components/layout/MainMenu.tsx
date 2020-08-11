import React from "react";
import styled from "styled-components";
import { darken } from "polished";
import { colors } from "@theme/variables";

import MainMenuItem from './MainMenuItem';


const headerHeight = "80px";

const mainMenu = {
  Root: styled.nav<{ isOpened: boolean }>`
    background-color: red;
    position: fixed;
    padding-top: ${headerHeight};
    top: -100%;
    width: 100%;
    height: 100vh;
    background-color: ${darken(0.1, colors["blue-teal"])};
    z-index: 1;
    transition: transform 0.3s ease;
    transform: translateY(${({ isOpened }) => (isOpened ? "100%" : "0")});
    will-change: transform;
  `,
  List: styled.ul`
    padding-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
};

export default function MainMenu({
  isMenuOpen,
  toggleMenu,
}: {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}) {
  return (
    <mainMenu.Root isOpened={isMenuOpen}>
      <mainMenu.List>
        <MainMenuItem
          index={1}
          path="/"
          label="Home page"
          onClick={toggleMenu}
        />
        <MainMenuItem
          index={2}
          path="/second-page"
          label="Second page"
          onClick={toggleMenu}
        />
      </mainMenu.List>
    </mainMenu.Root>
  );
}
