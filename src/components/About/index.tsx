import { SplitText } from "@cyriacbr/react-split-text";
import { useEffect, useRef, useState } from "react";
import useOnScreen from "../../hooks/useOnScreen";
import { StyledAbout } from "./styles";
import gsap from "gsap";

const About = () => {
  const ref = useRef<HTMLDivElement>(null);

  const [reveal, setreveal] = useState(false);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) setreveal(onScreen);
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
          <span data-scroll>Sobre mi</span>
        </h2>
        <div className={`${reveal ? "is-reveal" : ""} text-container`}>
          <SplitText
            LineWrapper={({ children }) => (
              <div className="wrapper">{children}</div>
            )}
          >
            Naci en Tucuman, Argentina. Cuando empecé mi etapa universitaria me
            inscribí ingenieria en sistemas para poder entender y aprender mas
            del mundo IT, asi hasta llegar al tercer año. Muy convencido de que
            mi enfoque era más hacia la programación, decidí darle el rumbo a mi
            vida y comence estudiar desarrollo web, hasta que me gradue como
            fullstack developer (aunque siempre me atrajo mas el frontend). Soy
            un programador que busca un equipo de trabajo para aplicar mis
            conocimientos, adquirir experiencia, aprender mucho más, y crecer
            profesionalmente en esta carrera que me apasiona.
          </SplitText>
        </div>
      </div>
    </StyledAbout>
  );
};

export default About;
