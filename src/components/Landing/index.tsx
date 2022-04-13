import { FC, useEffect } from "react";
import { StyledLanding } from "./styles";
import gsap from "gsap";
import SocialMediaLinks from "../SocialMediaLinks";

interface Props {
  getTexts: (key: string) => {
    [key: string]: string;
  };
}

const Landing: FC<Props> = ({ getTexts }) => {
  const text = getTexts("landing");

  useEffect(() => {
    if (window.innerWidth > 1024) {
      gsap.from(".landing-centered span", {
        y: 100,
        duration: 1,
        ease: "power4",
        stagger: 0.1,
      });
    }
  }, []);

  return (
    <StyledLanding data-scroll-section>
      <div className="landing-centered">
        <h2>
          <span>{text.name}</span> <span>{text.lastName}</span>
        </h2>
        <h2>
          <span>{text.frontend}</span>
        </h2>
        <h2>
          <span>{text.web}</span> <span>{text.developer}</span>
        </h2>
        <p className="subtitle">
          <span>{text.portfolio}</span> <span>{text.year}</span>
        </p>
      </div>

      <SocialMediaLinks getTexts={getTexts} />
    </StyledLanding>
  );
};

export default Landing;
