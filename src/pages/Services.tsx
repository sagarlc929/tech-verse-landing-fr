
const servicesDetails = [
    {
        title: "CCTV Solutions",
        description:
            "We offer high-quality CCTV systems that provide real-time surveillance, motion detection, and cloud storage to ensure your premises are always secure.",
    },
    {
        title: "Network Consultancy",
        description:
            "Our network consultancy service helps design, implement, and optimize robust networks for your business, ensuring fast, secure, and scalable operations.",
    },
    {
        title: "Hardware Solutions",
        description:
            "We provide custom-built hardware solutions tailored to your business needs, including computers, servers, and networking devices that guarantee reliability and performance.",
    },
    {
        title: "Software Solutions",
        description:
            "We create custom software to optimize business processes. Whether it’s a CRM system, ERP solution, or mobile application, we deliver efficient and scalable solutions.",
    },
];

const ServicesPage = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-blue-600 mb-8">Our Services</h2>
                <p className="text-lg text-gray-700 mb-12">
                    We provide a wide range of IT services to help businesses stay ahead of the curve in today’s competitive digital landscape.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {servicesDetails.map((service, index) => (
                        <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold text-blue-600 mb-4">{service.title}</h3>
                            <p className="text-gray-700">{service.description}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-12">
                    <p className="text-lg text-gray-700 mb-8">
                        If you’re ready to take your business to the next level, contact us to discuss how we can help.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ServicesPage;
