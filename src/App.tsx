// import { useEffect, useRef } from "react";
import "./App.css";
// import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import useScrollSettings from "./hooks/useScrollSettings";
// import gsap from "gsap";

function App() {
  const scroller = useScrollSettings(true);

  return (
    <>
      {/* <Navbar /> */}
      <Navbar2 />
      <div id="main-container" className="main-container" data-scroll-container>
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
