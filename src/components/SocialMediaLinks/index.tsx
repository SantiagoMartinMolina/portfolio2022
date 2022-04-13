import { FC, useEffect } from "react";
import { StyledSocialMediaLinks } from "./styles";
import gsap from "gsap";

interface Props {
  getTexts: (key: string) => {
    [key: string]: string;
  };
}

const SocialMediaLinks: FC<Props> = ({ getTexts }) => {
  const text = getTexts("socialMediaLinks");

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
            {text.linkedIn}
          </a>
        </li>
        <li>
          <a
            href="https://github.com/SantiagoMartinMolina"
            target="_blank"
            rel="noopener noreferrer"
          >
            {text.github}
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/santidev7"
            target="_blank"
            rel="noopener noreferrer"
          >
            {text.twitter}
          </a>
        </li>
      </ul>
    </StyledSocialMediaLinks>
  );
};

export default SocialMediaLinks;
