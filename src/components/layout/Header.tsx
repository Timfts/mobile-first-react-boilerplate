import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "@theme/variables";

import HamburgerButton from "@components/common/HamburgerButton";

const header = {
  Root: styled.header`
    background-color: ${colors["blue-teal"]};
    color: ${colors["white"]};
    height: 80px;
    font-weight: 500;
    position: relative;
    display: flex;
    align-items: center;
    padding: 0 24px;
    z-index: 2;
  `,
  BurgerButtonContainer: styled.div`
    position: absolute;
    right: 24px;
  `,
};

interface HeaderProps {
  onOpenMenu(...args: any): any;
  isMenuOpen: boolean;
}

export default function Header({ onOpenMenu, isMenuOpen }: HeaderProps) {
  return (
    <header.Root>
      React mobile-first boilerplate
      <header.BurgerButtonContainer>
        <HamburgerButton isOpen={isMenuOpen} onClick={onOpenMenu} />
      </header.BurgerButtonContainer>
    </header.Root>
  );
}
