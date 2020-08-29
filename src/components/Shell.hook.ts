import { useState } from "react";

export default function useShell() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return {
    isMenuOpen,
    toggleMenu,
  };
}
