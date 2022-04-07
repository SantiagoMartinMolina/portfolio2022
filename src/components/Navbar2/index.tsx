import { useEffect, useState } from "react";
import { StyledNavbar2 } from "./styles";
import gsap from "gsap";
import { AiFillDatabase } from "react-icons/ai";
import CSSRulePlugin from "gsap/CSSRulePlugin";

const Navbar2 = () => {
  // const [isActive, setIsActive] = useState(false);
  // console.log(isActive);

  const handleMouseEnter = () => {
    gsap
      .timeline()
      .to(".nav-bg", {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: "Back.easeOut.config(1.7)",
      })
      .to(
        ".menu a",
        {
          y: "0%",
          opacity: 1,
          duration: 0.02,
          stagger: 0.05, // 0.1 seconds between when each "a" element starts animating
        },
        "<"
      );
  };
  const handleMouseLeave = () => {};

  // const handleHover = (type: string) => {
  //   console.log(type);

  //   // ver cuando entro y saco el puntero rapidamente, no esta funcionando correctamente

  //   if (type === "enter") {
  //     if (isActive) return;
  //     setIsActive(true);

  //     gsap.timeline();

  // gsap.to(".nav-bg", {
  //   scale: 1,
  //   opacity: 1,
  //   duration: 0.5,
  //   ease: "Back.easeOut.config(1.7)",
  // });

  //   gsap.to(".menu", {
  //     scale: 1,
  //     duration: 0.5,
  //     ease: "Back.easeOut.config(1.7)",
  //   });
  // }

  //   if (type === "leave") {
  //     setIsActive(false);
  //     gsap.to(".menu", {
  //       scale: 0,
  //       duration: 0,
  //     });

  //     gsap.set(".nav-bg", {
  //       scale: 0.9,
  //       opacity: 0,
  //     });
  //   }

  // const scrollEl = document.getElementById("main-container")!;
  // console.log("entro", scrollEl);
  // gsap.to(".logo", {
  //   x: 300,
  //   y: 200,
  //   duration: 2,
  //   scrollTrigger: {
  //     scroller: scrollEl,
  //     trigger: document.getElementById("prueba")!,
  //     start: "top bottom",
  //     // end: "top top",
  //     scrub: true,
  //     markers: true,
  //   },
  // });
  // };
  return (
    <StyledNavbar2>
      <div>
        <h2 className="logo">
          <span>SM</span>
        </h2>
      </div>
      <nav onMouseLeave={handleMouseLeave}>
        <div onMouseEnter={handleMouseEnter} className="menu-btn">
          Menu
        </div>
        <ul className="menu">
          <li>
            <a href="#">Proyectos</a>
          </li>
          <li>
            <a href="#">Habilidades</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
        <div className="nav-bg">
          <div></div>
        </div>
      </nav>
    </StyledNavbar2>
  );
};

export default Navbar2;
