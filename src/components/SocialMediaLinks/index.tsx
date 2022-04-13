import { useEffect } from "react";
import { StyledSocialMediaLinks } from "./styles";
import gsap from "gsap";

const SocialMediaLinks = () => {
  useEffect(() => {
    if (window.innerWidth > 1024) {
      gsap.to(".links-container a", {
        y: "0%",
        duration: 0.5,
        stagger: 0.15,
      });
    }
  }, []);

  return (
    <StyledSocialMediaLinks className="links-container">
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
    </StyledSocialMediaLinks>
  );
};

export default SocialMediaLinks;
