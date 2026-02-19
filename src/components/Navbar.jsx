import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                ? "bg-black/70 backdrop-blur-sm shadow-lg"
                : "bg-transparent"
                }`}
        >
            <div
                className={`max-w-8xl mx-auto px-6 flex justify-between items-center transition-all duration-300 ${scrolled ? "py-2" : "py-4"
                    }`}
            >

                <h1 className="text-xl font-semibold text-white">
                    Portfolio
                </h1>

                <div className="space-x-8 hidden md:flex">
                    <a href="#about" className=" px-4 py-2 text-gray-300 hover:text-white transition">
                        About
                    </a>
                    <a href="#projects" className=" px-4 py-2 text-gray-300 hover:text-white transition">
                        Projects
                    </a>
                    <a href="#contact" className=" px-4 py-2 text-gray-300 hover:text-white transition">
                        Contact
                    </a>
                    {/* SOCIAL ICONS */}
                    <div className="flex items-center gap-4 ml-6">

                        <a
                            href="https://github.com/RahulRoy0307"
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-400 hover:text-white transition hover:scale-110"
                        >
                            <FaGithub size={18} />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/rahul-roy-210441211/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-400 hover:text-blue-400 transition hover:scale-110"
                        >
                            <FaLinkedin size={18} />
                        </a>

                        <a
                            href="https://www.instagram.com/rahul0703roy/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-400 hover:text-pink-400 transition hover:scale-110"
                        >
                            <FaInstagram size={18} />
                        </a>

                    </div>

                </div>
                {/* Hamburger button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 px-6 py-6 space-y-4">

                    <a href="#about" onClick={() => setMenuOpen(false)} className="block text-gray-300 hover:text-white">
                        About
                    </a>

                    <a href="#projects" onClick={() => setMenuOpen(false)} className="block text-gray-300 hover:text-white">
                        Projects
                    </a>

                    <a href="#contact" onClick={() => setMenuOpen(false)} className="block text-gray-300 hover:text-white">
                        Contact
                    </a>

                    <a
                        href="/Rahul-Roy-Resume.pdf"
                        onClick={() => setMenuOpen(false)}
                        className="inline-block bg-purple-600 px-4 py-2 rounded-lg text-white hover:bg-purple-500 transition"
                    >
                        Resume
                    </a>

                </div>
            )}
        </nav>
    );
}

export default Navbar;
