import { useState } from "react";
import React from 'react';
const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Handle scroll visibility of the "Go to Top" button
    const handleScroll = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-6 text-center">
                {/* Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                        <p className="text-gray-400">Phone: +1 234 567 890</p>
                        <p className="text-gray-400">Email: info@yourcompany.com</p>
                        <p className="text-gray-400">Address: 123 IT St, City, Country</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                        <p className="text-gray-400">Stay connected with us on social media:</p>
                        <div className="flex justify-center space-x-4 mt-4">
                            {/* Example Social Media Links */}
                            <a href="#" className="text-blue-400 hover:text-blue-600">
                                Facebook
                            </a>
                            <a href="#" className="text-blue-400 hover:text-blue-600">
                                Twitter
                            </a>
                            <a href="#" className="text-blue-400 hover:text-blue-600">
                                LinkedIn
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Find Us</h3>
                        {/* Embed Google Maps */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.3304635489067!2d-74.00601578458616!3d40.71277527933193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1804f1743d%3A0x4eec3d8b636dcbdb!2sOne%20World%20Trade%20Center!5e0!3m2!1sen!2sus!4v1632731413154!5m2!1sen!2sus"
                            width="100%"
                            height="200"
                            style={{ border: 0 }}
                            // allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>

                {/* Go to Top Button */}
                {isVisible && (
                    <button
                        onClick={scrollToTop}
                        className="fixed bottom-10 right-10 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        title="Go to Top"
                    >
                        ↑
                    </button>
                )}
            </div>
        </footer>
    );
};

export default Footer;

