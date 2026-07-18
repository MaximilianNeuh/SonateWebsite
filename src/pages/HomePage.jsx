import Nav from "../components/layout/Nav";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import EventsSection from "../components/events/EventsSection";
import JoinSection from "../components/join/JoinSection";
import Footer from "../components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <EventsSection />
      <JoinSection />
      <Footer />
    </>
  );
}
