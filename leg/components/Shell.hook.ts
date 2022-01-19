import { useState } from "react";

export default function useShell() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  function toggleMenu(): void {
    setIsMenuOpen(!isMenuOpen);
  }

  return {
    isMenuOpen,
    toggleMenu,
  };
}
