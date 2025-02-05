import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="relative bg-cover bg-center h-[500px] flex items-center text-white" style={{ backgroundImage: "url('/home-hero.jpg')" }}>
            <div className="container mx-auto px-6 py-6 text-center rounded-lg " style={{ backgroundColor: "rgba(37, 99, 235, 0.5)" }}>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
                    Your Trusted IT Solutions Partner
                </h1>
                <p className="text-lg md:text-xl mb-6">
                    Providing CCTV, Network Services, Hardware & Software Solutions
                </p>
                <div className="space-x-4">
                    <Link to="/services" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition">
                        Our Services
                    </Link>
                    <Link to="/contact" className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-lg shadow-md transition">
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
