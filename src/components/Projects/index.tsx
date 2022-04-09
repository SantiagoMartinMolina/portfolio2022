import { StyledProjectItem, StyledProjects } from "./styles";
import projectsData from "../../utils/data";
import type { FC } from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import useOnScreen from "../../hooks/useOnScreen";

interface Props {
  title: string;
  description: string;
  repoLink: string;
  demoLink: string;
  image: string | null;
  video: string | null;
}

const ProjectItem: FC<Props> = ({
  title,
  description,
  demoLink,
  repoLink,
  image,
  video,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(ref, 0.5);
  return (
    <StyledProjectItem
      ref={ref}
      className={`project-item-wrapper ${onScreen ? "is-reveal" : ""}`}
    >
      <div></div>
      <div className="project-item">
        <div className="project-item-info">
          <h1 className="project-info-title">{title}</h1>
        </div>
        {video ? (
          <div className="banner">
            <video autoPlay muted loop>
              <source src={video} type="video/mp4" />
            </video>
          </div>
        ) : (
          <div
            className="project-item-image"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        )}
      </div>
      <div></div>
    </StyledProjectItem>
  );
};

const Projects = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      const sections = gsap.utils.toArray(".project-item-wrapper");
      console.log(sections);
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          start: "top top",
          trigger: ref.current,
          scroller: "#main-container",
          pin: true,
          scrub: 0.5,
          snap: 1 / (sections.length - 1),
          end: () => `+=${ref.current!.offsetWidth}`,
        },
      });
      ScrollTrigger.refresh();
    });
  }, []);

  const projects = projectsData.map((project) => (
    <ProjectItem key={project.title} {...project} />
  ));

  return (
    <StyledProjects data-scroll-section id="projects">
      <h2 className="title">
        <span data-scroll>Proyectos</span>
      </h2>
      <div className="projects-container" ref={ref}>
        {projects}
      </div>
    </StyledProjects>
  );
};

export default Projects;
