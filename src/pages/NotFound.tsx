import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-red-600 mb-8">404 - Page Not Found</h2>
                <p className="text-lg text-gray-700 mb-8">
                    Oops! The page you're looking for does not exist. It might have been moved or deleted.
                </p>
                <Link
                    to="/"
                    className="inline-block py-2 px-6 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                    Go Back to Home
                </Link>
            </div>
        </section>
    );
};

export default NotFoundPage;
