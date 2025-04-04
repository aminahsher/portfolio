import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto flex flex-col items-center text-center">
        {/* Social Media Links */}
        <div className="flex gap-6 mb-5">
          <a
            href="https://www.facebook.com/aminah.ali3/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition duration-300 text-xl"
          >
            <FaFacebookF />
          </a>
          
          <a
            href="https://www.linkedin.com/in/aminah-ali-931b142b7/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition duration-300 text-xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/aminahsher"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300 text-xl"
          >
            <FaGithub />
          </a>
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} <span className="font-semibold text-white">Aminah Ali</span>. All rights reserved.
        </p>

        {/* Navigation Links */}
        <nav className="mt-5">
          <ul className="flex gap-5 text-sm">
            <li>
              <a href="#about" className="hover:text-white transition duration-200">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white transition duration-200">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-white transition duration-200">
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition duration-200">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
