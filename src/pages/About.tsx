const AboutPage = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-blue-600 mb-8">About Us</h2>
                <p className="text-lg text-gray-700 mb-12">
                    We are a leading provider of IT solutions, offering comprehensive services including CCTV systems, network consultancy, hardware solutions, and custom software development. Our mission is to help businesses improve their security, efficiency, and overall performance.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold text-blue-600 mb-4">Our Mission</h3>
                        <p className="text-gray-700">
                            Our mission is to deliver innovative and reliable IT solutions that empower businesses to achieve their goals. We aim to provide high-quality services, ensuring that our clients can focus on what they do best while we handle the technology.
                        </p>
                    </div>
                    <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold text-blue-600 mb-4">Our Values</h3>
                        <p className="text-gray-700">
                            Integrity, professionalism, and customer satisfaction are at the heart of everything we do. We work closely with our clients to understand their needs and offer tailored solutions that exceed expectations.
                        </p>
                    </div>
                </div>
                <div className="mt-12">
                    <p className="text-lg text-gray-700 mb-8">
                        With years of experience in the IT industry, our team of experts is committed to providing top-tier service and support to help businesses thrive in an ever-evolving technological landscape.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;

