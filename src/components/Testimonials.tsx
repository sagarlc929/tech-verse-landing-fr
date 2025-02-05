
const testimonials = [
    {
        name: "John Doe",
        position: "CEO, TechCorp",
        text: "IT Solutions provided us with top-notch CCTV security and networking services. Their professionalism and expertise are unmatched.",
    },
    {
        name: "Jane Smith",
        position: "CTO, SecureNet",
        text: "We've been using their hardware solutions for years, and the performance and reliability have always been outstanding.",
    },
    {
        name: "Mark Johnson",
        position: "Manager, Digital Systems",
        text: "The software solutions they developed for our company have streamlined our operations significantly. Highly recommend their services!",
    },
];

const Testimonials = () => {
    return (
        <section className="py-16 bg-blue-50">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-blue-600 mb-8">What Our Clients Say</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg max-w-xs">
                            <p className="text-lg text-gray-700 mb-4">{`"${testimonial.text}"`}</p>
                            <p className="font-semibold text-blue-600">{testimonial.name}</p>
                            <p className="text-gray-500">{testimonial.position}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
