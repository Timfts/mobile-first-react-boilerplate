import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "@theme/variables";


const mainMenuItem = {
  Root: styled.li`
    color: ${colors["white"]};
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors["blue-teal"]};
    width: 80%;
    padding: 15px 0;

    a,
    a:active,
    a:hover {
      color: ${colors["white"]};
      text-decoration: none;
    }

    &:not(:last-of-type) {
      margin-bottom: 20px;
    }
  `,
};

export default function MainMenuItem({
  index,
  label,
  path,
  onClick,
}: {
  index: number;
  label: string;
  path: string;
  onClick?: () => void;
}) {
  return (
    <mainMenuItem.Root>
      <Link onClick={onClick} to={path}>
        {label}
      </Link>
    </mainMenuItem.Root>
  );
}