import { useContext } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import useScrollSettings from "./hooks/useScrollSettings";
import Landing from "./components/Landing";
import About from "./components/About";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import { LangContext } from "./context/LanguageContext";
import Marquee1 from "./components/Marquee1";
import Marquee2 from "./components/Marquee2";

function App() {
  const {
    state: { language },
    dispatch: { getTexts, setLanguage },
  } = useContext(LangContext);

  const scroller = useScrollSettings(true)!;

  return (
    <>
      <Navbar
        scroller={scroller}
        // language={language}
        // getTexts={getTexts}
        // setLanguage={setLanguage}
      />
      <div id="main-container" className="main-container" data-scroll-container>
        <Landing />
        <Marquee1 />
        <About />
        <Projects />
        <Marquee1 />
        <ContactForm />
      </div>
    </>
  );
}

export default App;
