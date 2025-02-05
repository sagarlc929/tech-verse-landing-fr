import { Link } from "react-router-dom";

const services = [
    { title: "CCTV Solutions", description: "Top-notch CCTV surveillance systems to ensure the security of your business.", link: "/services/cctv" },
    { title: "Network Consultancy", description: "Expert network consultancy to optimize and manage your network infrastructure.", link: "/services/network" },
    { title: "Hardware Solutions", description: "Custom hardware solutions for businesses, from computers to servers and more.", link: "/services/hardware" },
    { title: "Software Solutions", description: "Tailored software solutions to help streamline your business operations.", link: "/services/software" },
];

const Services = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-blue-600 mb-8">Our Services</h2>
                <p className="text-lg text-gray-700 mb-12">
                    We provide a wide range of IT services designed to meet the needs of modern businesses.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold text-blue-600 mb-4">{service.title}</h3>
                            <p className="text-gray-700 mb-4">{service.description}</p>
                            <Link to={service.link} className="text-blue-600 hover:text-blue-800 font-semibold">
                                Learn More
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
