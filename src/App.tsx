import "./App.css";
import Navbar from "./components/Navbar";
import useScrollSettings from "./hooks/useScrollSettings";
import Landing from "./components/Landing";
import About from "./components/About";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";

function App() {
  const scroller = useScrollSettings(true)!;

  return (
    <>
      <Navbar scroller={scroller} />
      <div id="main-container" className="main-container" data-scroll-container>
        <Landing />
        <About />
        <Projects />
        <ContactForm />
      </div>
    </>
  );
}

export default App;
