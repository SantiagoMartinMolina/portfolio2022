import { useEffect } from "react";
import { StyledLanding } from "./styles";
import gsap from "gsap";

const Landing = () => {
  useEffect(() => {
    if (window.innerWidth > 1024) {
      gsap.from(".landing-centered span", {
        y: 100,
        duration: 1,
        ease: "power4",
        stagger: 0.1,
      });

      gsap.to(".landing-bottom a", {
        y: "0%",
        duration: 0.5,
        stagger: 0.15,
      });
    }
  }, []);

  return (
    <StyledLanding data-scroll-section>
      <div className="landing-centered">
        <h2>
          <span>Santiago</span> <span>Molina</span>
        </h2>
        <h2>
          <span>Frontend</span>
        </h2>
        <h2>
          <span>Web</span> <span>developer</span>
        </h2>
        <p className="subtitle">
          <span>Portfolio</span> <span>2022</span>
        </p>
      </div>

      <div className="landing-bottom">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/santiago-molina-dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              href="https://github.com/SantiagoMartinMolina"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/santidev7"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </StyledLanding>
  );
};

export default Landing;
