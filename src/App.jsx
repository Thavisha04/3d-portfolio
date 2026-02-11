import Hero from './sections/Hero.jsx'
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import NavBar from "./components/NavBar.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import TechStack from "./sections/TechStack.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import Education from "./sections/Education.jsx";
import Certifications from "./sections/Certifications.jsx";

const App = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <ShowcaseSection />
            <FeatureCards />
            <ExperienceSection />
            <Education />
            <TechStack />
            <Certifications />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    )
}

export default App;