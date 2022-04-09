import styled from "styled-components";

export const StyledProjects = styled.section`
  background-color: rgb(12, 12, 12);
  margin: 0 -5vw;
  position: relative;

  .projects-container {
    height: 80vh;
    padding: 3em;
    width: fit-content;
    display: flex;
    flex-wrap: nowrap;
  }
`;

export const StyledProjectItem = styled.div`
  aspect-ratio: 16/9;
  height: 100%;
  /* display: grid; */
  /* grid-template-columns: 20vw 1fr 200px; */
  width: 100vw;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em;

  &.project-item-wrapper.is-reveal {
    .project-item-image,
    .banner {
      transform: scale(1);
      filter: none;
    }
  }

  .project-item {
    width: 100%;
    height: 100%;
    position: relative;
    will-change: transform;

    .project-item-info {
      position: absolute;
      bottom: 10%;
      z-index: 1;
      /* transform: translateX(-20%); */
      color: #dbd8d6;

      .project-info-title {
        line-height: 6vw;
        font-family: "Bai Janjuree", sans-serif;
        font-weight: 600;
        font-size: 6vw;
      }
    }

    .project-item-image,
    .banner {
      background-position: center;
      background-size: cover;
      transform-origin: center;
      width: 100%;
      height: 100%;
      will-change: transform;
      transform: scale(0.7);
      transition: all 1.5s cubic-bezier(0.77, 0, 0.175, 1);
      filter: grayscale(100%) sepia(20%) brightness(80%);
    }
  }
`;
