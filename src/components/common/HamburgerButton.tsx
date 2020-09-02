import React from "react";
import { colors } from "@theme/variables";

interface HamburgerMenuProps {
  isOpen: boolean;
  onClick(...args: any): any;
}

const HamburgerButton: React.FC<HamburgerMenuProps> = ({ isOpen, onClick }) => {
  const hamburgerLineBaseStyle = {
    backgroundColor: colors["white"],
    height: "1px",
    width: "30px",
    transformOrigin: "left",
    transition: "transform .5s ease",
  };

  return (
    <div
      onClick={onClick}
      css={{
        width: "30px",
        height: "20px",
        cursor: "pointer",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      <div
        css={[
          hamburgerLineBaseStyle,
          {
            transform: `rotate(${isOpen ? "400deg" : "0"})`,
          },
        ]}
      />
      <div
        css={[
          hamburgerLineBaseStyle,
          {
            transition: "opacity .2s ease",
            opacity: `${isOpen ? "0" : "1"}`,
          },
        ]}
      />
      <div
        css={[
          hamburgerLineBaseStyle,
          {
            transform: `rotate(${isOpen ? "-40deg" : "0"})`,
          },
        ]}
      />
    </div>
  );
};

export default HamburgerButton;
