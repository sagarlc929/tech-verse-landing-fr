import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-blue-600 text-white shadow-md">
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold">
                    IT Solutions
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6">
                    <Link to="/" className="hover:text-gray-200">Home</Link>
                    <Link to="/services" className="hover:text-gray-200">Services</Link>
                    <Link to="/about" className="hover:text-gray-200">About</Link>
                    <Link to="/contact" className="hover:text-gray-200">Contact</Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? "✖" : "☰"}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <nav className="md:hidden bg-blue-700 text-white p-4">
                    <Link to="/" className="block py-2" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/services" className="block py-2" onClick={() => setIsOpen(false)}>Services</Link>
                    <Link to="/about" className="block py-2" onClick={() => setIsOpen(false)}>About</Link>
                    <Link to="/contact" className="block py-2" onClick={() => setIsOpen(false)}>Contact</Link>
                </nav>
            )}
        </header>
    );
};

export default Header;
