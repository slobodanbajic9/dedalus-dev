"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { FiMenu, FiX } from "react-icons/fi";

import CVButton from "./CVButton";

import logo from "@/public/logo/logo.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="flex justify-between items-center py-4 px-4 md:px-8">
      <Link href="/">
        <Image src={logo} alt="logo" width={50} height={50} />
      </Link>
      <nav className="hidden md:flex space-x-6 items-center">
        <ul className="flex space-x-6">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className="hover:underline underline-offset-4">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <CVButton />
      <div className="flex items-center space-x-4">
        <ThemeSwitcher />
        <button onClick={toggleMenu} className="focus:outline-none md:hidden">
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
      {isOpen && (
        <nav className="absolute top-20 right-4 bg-white dark:bg-black rounded-lg shadow-md p-8 md:hidden">
          <ul className="flex flex-col space-y-4">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="hover:underline underline-offset-4"
                  onClick={toggleMenu}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
