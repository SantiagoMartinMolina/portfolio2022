import "./App.css";
import Navbar from "./components/Navbar";
import useScrollSettings from "./hooks/useScrollSettings";
import Landing from "./components/Landing";
import About from "./components/About";

function App() {
  useScrollSettings(true);

  return (
    <>
      <Navbar />
      <div id="main-container" className="main-container" data-scroll-container>
        <Landing />
        <About />
      </div>
    </>
  );
}

export default App;
