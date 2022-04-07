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
      )
      .to(".menu-btn", { backgroundColor: "#000", color: "#fafafa" }, "<");
  };
  const handleMouseLeave = () => {
    gsap.to(".nav-bg", {
      scale: 0.9,
      opacity: 0,
      duration: 0.3,
      ease: "Back.easeOut.config(1.7)",
    });

    gsap.to(".menu a", {
      y: "100%",
      opacity: 0,
      duration: 0.1,
      stagger: 0.05,
    });

    gsap.to(".menu-btn", {
      backgroundColor: "#fafafa",
      color: "#000",
    });
  };

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
