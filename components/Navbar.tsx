"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { ModeToggle } from "./ModeToggle";
import { FiMenu, FiX } from "react-icons/fi";

import whiteLogo from "@/public/logo-white.svg";
import blackLogo from "@/public/logo-black.svg";

export default function Navbar() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [theme, resolvedTheme]);

  if (!mounted) {
    return null;
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between items-center py-4 px-4 md:px-8">
      <Image
        src={resolvedTheme === "dark" ? whiteLogo : blackLogo}
        alt="logo"
        width={50}
        height={50}
      />
      <nav className="hidden md:flex space-x-6">
        <ul className="flex space-x-6">
          <li>
            <a href="#about" className="hover:underline underline-offset-4">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:underline underline-offset-4">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline underline-offset-4">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex items-center space-x-4">
        <ModeToggle />
        <button onClick={toggleMenu} className="focus:outline-none md:hidden">
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
      {isOpen && (
        <nav className="absolute top-20 right-4 bg-white dark:bg-black rounded-lg shadow-md p-8 md:hidden">
          <ul className="flex flex-col space-y-4">
            <li>
              <a
                href="#about"
                className="hover:underline underline-offset-4"
                onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:underline underline-offset-4"
                onClick={toggleMenu}>
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:underline underline-offset-4"
                onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
