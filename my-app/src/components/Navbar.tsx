"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MdMenuOpen, MdClose } from "react-icons/md";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contacts" },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full z-50 absolute top-0 left-0">
      <div className="container mx-auto flex justify-between items-center pt-6 px-4">
        {/* Logo */}
        <Link href="#hero">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition duration-300">
            Aminah Ali
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 lg:gap-16 text-white font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-purple-400 transition duration-300 hover:underline underline-offset-8"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <div className="md:hidden text-white z-50">
          {menuOpen ? (
            <MdClose size={32} onClick={() => setMenuOpen(false)} />
          ) : (
            <MdMenuOpen size={32} onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          className="md:hidden bg-gradient-to-b from-blue-950 to-blue-900 text-white absolute top-0 left-0 w-full px-4 py-6 shadow-xl rounded-b-2xl"
        >
          <ul className="flex flex-col gap-6 text-lg font-semibold">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-purple-400 transition duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
