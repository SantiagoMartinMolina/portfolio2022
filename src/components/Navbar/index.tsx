import { useEffect, useState } from "react";
import type { FC } from "react";
import { StyledNavbar2 } from "./styles";
import gsap from "gsap";
import { Scroller } from "../../hooks/useScrollSettings";
import useLanguageContext from "../../hooks/useLanguageContext";

interface Props {
  scroller: Scroller;
}

const Navbar: FC<Props> = ({ scroller }) => {
  const {
    state: { language },
    dispatch: { getTexts, setLanguage },
  } = useLanguageContext();
  const text = getTexts("navbar");

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
    const detailsColor = "#c30404";
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
          stagger: 0.05,
        },
        "<"
      )
      .to(
        ".menu button",
        {
          y: "0%",
          opacity: 1,
          duration: 0.02,
          stagger: 0.05,
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
      backgroundColor: "#f5f0ec",
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
          <span>{text.logo}</span>
        </h2>
      </div>
      <nav onMouseLeave={handleMouseLeave}>
        <div className="menu-btn-container">
          <button
            onMouseEnter={handleMouseEnter}
            onClick={handleClick}
            className="menu-btn"
          >
            {text.btnMenu}
          </button>
        </div>
        <ul className="menu">
          <li>
            <span onClick={() => scroller.scrollTo("#about", {})}>
              {text.aboutMe}
            </span>
          </li>
          <li>
            <span onClick={() => scroller.scrollTo("#projects", {})}>
              {text.projects}
            </span>
          </li>

          <li>
            <span onClick={() => scroller.scrollTo("#contact", {})}>
              {text.contact}
            </span>
          </li>
          <li>
            <button
              onClick={() => setLanguage(language === "ES" ? "EN" : "ES")}
            >
              {language}
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
