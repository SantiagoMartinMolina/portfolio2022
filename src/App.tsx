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
        <div style={{ height: "100vh" }}>hola</div>
        <div style={{ height: "100vh" }}>hola</div>
        <div id="prueba" style={{ height: "100vh" }}>
          hola
        </div>
        <div style={{ height: "100vh" }}>hola</div>
        <div style={{ height: "100vh" }}>hola</div>
      </div>
    </>
  );
}

export default App;
