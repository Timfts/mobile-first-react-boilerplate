import React from 'react';
import styled from 'styled-components';
import colors from "@theme/colors";

const hamburgerButton = {
  Root: styled.div<{ isOpen: boolean, theme: string }>`
    width:30px;
    height:20px;
    cursor:pointer;
    position:relative;
    display:flex;
    align-items:center;
    justify-content: space-between;
    flex-direction:column;

    .hamburger-line{
      background-color: ${props => props.theme === 'dark' ? colors["ebony-clay"] : colors["white"]};
      height:1px;
      width:30px;
      transform-origin:left;
      transition:transform .5s ease;

      &:nth-child(1){
        transform: rotate(${({isOpen}) => isOpen  ? '400deg': '0'});
      }
      &:nth-child(2){
        transition:opacity .2s ease;
        opacity:${({isOpen}) => isOpen ? '0' : '1'};
      }
      &:nth-child(3){
        transform: rotate(${({isOpen}) => isOpen  ? '-40deg': '0'});
      }
    }

  `
};

interface HamburgerMenuProps {
  theme?: "dark" | "light";
  isOpen: boolean;
  onClick(...args: any): any;
}

export default function HamburgerButton({ theme = 'light', isOpen, onClick }: HamburgerMenuProps) {
  return (
    <hamburgerButton.Root onClick={onClick} isOpen={isOpen} theme={theme}>
      <div className="hamburger-line" />
      <div className="hamburger-line" />
      <div className="hamburger-line" />
    </hamburgerButton.Root>
  );
}