import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

const mainMenuItem = {};


function MainMenuItem({ index }: { index: number }) {
  return (
    <li>
      <p>listksd</p>
    </li>
  );
}

const mainMenu = {
  Root: styled.nav`
    background-color: red;
  `,
};

export default function MainMenu() {
  return <mainMenu.Root>main menu</mainMenu.Root>;
}
