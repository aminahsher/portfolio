import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-blue-800 text-white py-6">
            <div className="container mx-auto flex flex-col items-center">
                <div className="flex gap-4 mb-4">
                    <a href=" https://www.facebook.com/aminah.ali3/" className="hover:text-blue-600">
                        <FaFacebookF className="text-xl" />
                    </a>
                    <a href="https://twitter.com/yourusername" className="hover:text-blue-400">
                        <FaTwitter className="text-xl" />
                    </a>
                    <a href="https://www.linkedin.com/in/aminah-ali-931b142b7/" className="hover:text-blue-700">
                        <FaLinkedin className="text-xl" />
                    </a>
                    <a href="https://github.com/aminahsher" className="hover:text-gray-500">
                        <FaGithub className="text-xl" />
                    </a>
                </div>

                <p className="text-center">
                    &copy; {new Date().getFullYear()} Aminah Ali. All rights reserved.
                </p>

                <nav className="mt-4">
                    <ul className="flex gap-4">
                        <li>
                            <a href="#about" className="hover:text-gray-400">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className="hover:text-gray-400">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#skills" className="hover:text-gray-400">
                                Skills
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-gray-400">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;