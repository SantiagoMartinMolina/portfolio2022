import { SplitText } from "@cyriacbr/react-split-text";
import { FC, useEffect, useRef, useState } from "react";
import useOnScreen from "../../hooks/useOnScreen";
import { StyledAbout } from "./styles";
import gsap from "gsap";

interface Props {
  getTexts: (key: string) => {
    [key: string]: string;
  };
  language: string;
}

const About: FC<Props> = ({ getTexts, language }) => {
  const text = getTexts("about");

  const ref = useRef<HTMLDivElement>(null);

  const [reveal, setreveal] = useState(false);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) {
      setreveal(onScreen);
    }
  }, [onScreen]);

  useEffect(() => {
    if (window.innerWidth < 1024) return;
    if (reveal) {
      gsap.to(".wrapper", {
        y: -50,
        opacity: 1,
        stagger: 0.075,
        ease: "power2",
      });
    }
  }, [reveal]);

  return (
    <StyledAbout data-scroll-section id="about">
      <div className="about-container" ref={ref}>
        <h2 className="title">
          <span data-scroll>{text.aboutMe}</span>
        </h2>
        <div className={`${reveal ? "is-reveal" : ""} text-container`}>
          <SplitText
            LineWrapper={({ children }) => (
              <div className="wrapper">{children}</div>
            )}
          >
            {text.description}
          </SplitText>
        </div>
      </div>
      <a
        className="btn-cv"
        href={
          language === "ES"
            ? "Santiago_molina_CV.pdf"
            : "Santiago-molina-CV.pdf"
        }
        target="_blank"
        rel="noopener noreferrer"
      >
        {text.downloadCV}
      </a>
    </StyledAbout>
  );
};

export default About;
