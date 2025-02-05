
const features = [
    {
        title: "Advanced Security",
        description: "Our CCTV and security solutions provide peace of mind with real-time monitoring and alerts.",
        icon: "🔒",
    },
    {
        title: "Reliable Networking",
        description: "Optimized network infrastructure to keep your business connected and running smoothly.",
        icon: "🌐",
    },
    {
        title: "Custom Hardware",
        description: "Custom-built hardware solutions tailored to meet your business's unique needs.",
        icon: "💻",
    },
    {
        title: "Tailored Software",
        description: "Bespoke software solutions to streamline operations and improve business efficiency.",
        icon: "📱",
    },
];

const Features = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-blue-600 mb-8">Our Key Features</h2>
                <p className="text-lg text-gray-700 mb-12">
                    We focus on providing innovative and efficient solutions that enhance your business's operations.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold text-blue-600 mb-4">{feature.title}</h3>
                            <p className="text-gray-700">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
