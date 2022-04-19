import "./App.css";
import Navbar from "./components/Navbar";
import useScrollSettings from "./hooks/useScrollSettings";
import Landing from "./components/Landing";
import About from "./components/About";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Marquee1 from "./components/Marquee1";
import BackToTop from "./components/BackToTop";

function App() {
  const scroller = useScrollSettings(true)!;

  return (
    <main id="main-container" className="main-container" data-scroll-container>
      <Landing />
      <About />
      <Projects />
      <Marquee1 />
      <ContactForm />
      <BackToTop scroller={scroller} />
      <Navbar scroller={scroller} />
    </main>
  );
}

export default App;
