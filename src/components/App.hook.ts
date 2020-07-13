import { useState } from 'react';



export default function useApp(){
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu(){
    setIsMenuOpen(!isMenuOpen);
  }

  return {
    isMenuOpen,
    toggleMenu
  };
}