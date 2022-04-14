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
import BackToTop from "./components/BackToTop";

function App() {
  const {
    state: { language },
    dispatch: { getTexts, setLanguage },
  } = useContext(LangContext);

  const scroller = useScrollSettings(true)!;

  return (
    <main id="main-container" className="main-container" data-scroll-container>
      <Landing getTexts={getTexts} />
      <About getTexts={getTexts} language={language} />
      <Projects getTexts={getTexts} />
      <Marquee1 getTexts={getTexts} />
      <ContactForm getTexts={getTexts} />
      <BackToTop scroller={scroller} getTexts={getTexts} />
      <Navbar
        scroller={scroller}
        language={language}
        getTexts={getTexts}
        setLanguage={setLanguage}
      />
    </main>
  );
}

export default App;
