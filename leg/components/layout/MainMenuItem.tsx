import React from "react";
import { Link } from "react-router-dom";
import { darken } from "polished";
import { colors } from "@theme/variables";

interface MainMenuItemProps {
  label: string;
  path: string;
  onClick?: () => void;
}

const MainMenuItem: React.FC<MainMenuItemProps> = ({
  label,
  path,
  onClick,
}) => {
  return (
    <li
      css={{
        color: colors["white"],
        fontWeight: 500,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "80%",
        "&:not(:last-of-type)": {
          marginBottom: "20px",
        },
      }}
    >
      <Link
        onClick={onClick}
        to={path}
        css={{
          width: "100%",
          height: "100%",
          padding: "15px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: colors["blue-teal"],
          transition: "background-color .2s",
          "&, &:hover, &:active": {
            color: "white",
            textDecoration: "none",
          },
          "&:hover": {
            backgroundColor: darken(0.05, colors["blue-teal"]),
          },
        }}
      >
        {label}
      </Link>
    </li>
  );
};

export default MainMenuItem;
