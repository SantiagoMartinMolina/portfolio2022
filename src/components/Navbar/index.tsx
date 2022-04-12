import { useEffect, useState } from "react";
import type { FC } from "react";
import { StyledNavbar2 } from "./styles";
import gsap from "gsap";
import { Scroller } from "../../hooks/useScrollSettings";
// import Marquee2 from "../Marquee2";

interface Props {
  scroller: Scroller;
  // language: string;
  // getTexts: (key: string) => {
  //   [key: string]: string;
  // };
  // setLanguage: (lang: string) => void;
}

const Navbar: FC<Props> = ({ scroller }) => {
  // const texts = getTexts("about");
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 1024) {
      gsap.from(".menu-btn", {
        y: 100,
        duration: 0.5,
      });

      gsap.from(".logo span", {
        y: 100,
        duration: 0.5,
      });
    }
  }, []);

  const handleClick = () => {
    if (isActive) {
      hideMenu();
      return;
    }

    showMenu();
  };

  const showMenu = () => {
    setIsActive(true);
    const detailsColor = "#8a0000";
    gsap
      .timeline()
      .to(".nav-bg", {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: "Back.easeOut.config(1.7)",
      })
      .to(
        ".menu span",
        {
          y: "0%",
          opacity: 1,
          duration: 0.02,
          stagger: 0.05, // 0.1 seconds between when each "a" element starts animating
        },
        "<"
      )
      .to(
        ".menu button",
        {
          y: "0%",
          opacity: 1,
          duration: 0.02,
          stagger: 0.05, // 0.1 seconds between when each "a" element starts animating
        },
        "<"
      )
      .to(
        ".menu-btn",
        {
          backgroundColor: detailsColor,
          color: "#fafafa",
          border: `1px solid ${detailsColor}`,
        },
        "<"
      )
      .to(
        ".menu-btn-container",
        {
          justifyContent: "center",
        },
        "<"
      );
  };

  const hideMenu = () => {
    setIsActive(false);

    gsap.to(".nav-bg", {
      scale: 0.9,
      opacity: 0,
      duration: 0.3,
      ease: "Back.easeOut.config(1.7)",
    });

    gsap.to(".menu span", {
      y: "100%",
      opacity: 0,
      duration: 0.1,
      stagger: 0.05,
    });

    gsap.to(".menu button", {
      y: "100%",
      opacity: 0,
      duration: 0.1,
    });

    gsap.to(".menu-btn", {
      backgroundColor: "#fafafa",
      color: "#000",
      border: "1px solid #000",
    });

    gsap.to(".menu-btn-container", {
      justifyContent: "flex-end",
    });
  };
  const handleMouseEnter = () => {
    if (window.innerWidth < 1024) return;
    showMenu();
  };
  const handleMouseLeave = () => {
    hideMenu();
  };

  return (
    <StyledNavbar2>
      <div>
        <h2 className="logo">
          <span>SM</span>
        </h2>
      </div>
      {/* <Marquee2 /> */}
      <nav onMouseLeave={handleMouseLeave}>
        <div className="menu-btn-container">
          <button
            onMouseEnter={handleMouseEnter}
            onClick={handleClick}
            className="menu-btn"
          >
            Menu
          </button>
        </div>
        <ul className="menu">
          <li>
            <span onClick={() => scroller.scrollTo("#about", {})}>
              Sobre mi
            </span>
          </li>
          <li>
            <span onClick={() => scroller.scrollTo("#projects", {})}>
              Proyectos
            </span>
          </li>

          <li>
            <span onClick={() => scroller.scrollTo("#contact", {})}>
              Contacto
            </span>
          </li>
          <li>
            <button
            // onClick={() => setLanguage(language === "ES" ? "EN" : "ES")}
            >
              {/* {language} */}
              ES
            </button>
          </li>
        </ul>
        <div className="nav-bg">
          <div></div>
        </div>
      </nav>
    </StyledNavbar2>
  );
};

export default Navbar;
