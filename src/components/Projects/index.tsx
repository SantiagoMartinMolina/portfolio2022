import { StyledProjectItem, StyledProjects } from "./styles";
import projectsData from "../../utils/data";
import type { FC } from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import useOnScreen from "../../hooks/useOnScreen";
import useLanguageContext from "../../hooks/useLanguageContext";

interface PropsPI {
  title: string;
  repoLink: string;
  demoLink: string;
  image: string | null;
  video: string | null;
  icons: (string | (() => JSX.Element))[][];
}

const ProjectItem: FC<PropsPI> = ({
  title,
  demoLink,
  repoLink,
  image,
  video,
  icons,
}) => {
  const {
    dispatch: { getTexts },
  } = useLanguageContext();
  const text = getTexts("projects");
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(ref, 0.5);
  return (
    <StyledProjectItem
      ref={ref}
      className={`project-item-wrapper ${onScreen ? "is-reveal" : ""}`}
    >
      <div className="project-item">
        <div className="project-item-info">
          <h1 className="project-info-title">{title}</h1>
          <p className="project-info-description">{text[title]}</p>
          <div className="project-info-links">
            <a
              className="btn"
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {text.viewRepo}
            </a>
            <a
              className="btn"
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {text.viewDemo}
            </a>
          </div>
        </div>
        {video ? (
          <div className="banner">
            <video autoPlay muted loop>
              <source src={video} type="video/mp4" />
            </video>
            <div className="svg-container">
              {icons.map((icon, index) => {
                const [name, Icon] = icon;
                return (
                  <div key={index}>
                    <Icon />
                    <span>{name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div
            className="project-item-image"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="svg-container">
              {icons.map((icon, index) => {
                const [name, Icon] = icon;
                return (
                  <div key={index}>
                    <Icon />
                    <span>{name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </StyledProjectItem>
  );
};

const Projects: FC = () => {
  const {
    dispatch: { getTexts },
  } = useLanguageContext();
  const text = getTexts("projects");

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth > 1024) {
      setTimeout(() => {
        const sections = gsap.utils.toArray(".project-item-wrapper");
        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            start: "top top",
            end: () => `+=${ref.current!.offsetWidth}`,
            trigger: ref.current,
            scroller: "#main-container",
            pin: true,
            scrub: 0.5,
            snap: 1 / (sections.length - 1),
          },
        });
        ScrollTrigger.refresh();
      });
    }
  }, []);

  const projects = projectsData.map((project) => (
    <ProjectItem key={project.title} {...project} />
  ));

  return (
    <StyledProjects data-scroll-section id="projects">
      <h2 className="title">
        <span data-scroll>{text.projects}</span>
      </h2>
      <div className="projects-container" ref={ref}>
        {projects}
      </div>
    </StyledProjects>
  );
};

export default Projects;
