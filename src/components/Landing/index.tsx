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
    <StyledLanding>
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
            <a href="#">Linkedin</a>
          </li>
          <li>
            <a href="#">Github</a>
          </li>
          <li>
            <a href="#">Twitter</a>
          </li>
        </ul>
      </div>
    </StyledLanding>
  );
};

export default Landing;
