import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <Services />
            <Features />
            <Testimonials />
            <Contact />
        </div>
    );
};

export default Home;
