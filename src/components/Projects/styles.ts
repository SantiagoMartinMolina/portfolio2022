import styled from "styled-components";

export const StyledProjects = styled.section`
  background-color: rgb(12, 12, 12);
  /* margin: 0 -5vw; */
  position: relative;
  overflow: hidden;

  .title {
    font-size: 7vw;
    margin-top: 1.5em;
    overflow: hidden;
    text-align: center;

    span {
      display: inline-block;
      transform: translateY(100%);
      transition: transform 1s ease;

      &.is-reveal {
        transform: translateY(0);
      }
    }
  }

  .projects-container {
    /* height: 80vh; */
    /* padding: 3em; */
    width: fit-content;
    display: flex;
    flex-wrap: nowrap;
    /* background-color: gold; */
    height: 100vh;
  }
`;

export const StyledProjectItem = styled.div`
  /* aspect-ratio: 16/9; */
  height: 100%;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em;

  &.project-item-wrapper.is-reveal {
    .project-item-image,
    .banner {
      transform: scale(1);
      opacity: 0.4;
      filter: none;

      &:hover {
        opacity: 0.9;
      }
    }

    .project-item {
      .project-item-info {
        transform: scale(1);
        transform: translateX(150px);
        filter: none;
        opacity: 1;
      }
    }
  }

  .project-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* padding: 2em; */
    /* background-color: red; */
    width: 100%;
    height: 100%;
    position: relative;
    will-change: transform;
    gap: 2em;

    .project-item-info {
      /* position: absolute;
      left: 0;
      bottom: 10%; */
      z-index: 1;
      /* transform: translateX(-20%); */
      color: inherit;
      /* background-color: red; */
      flex: 1;
      will-change: transform;
      transform: scale(0.7);
      transition: all 1s cubic-bezier(0.77, 0, 0.175, 1);
      filter: grayscale(100%) sepia(20%) brightness(80%);
      opacity: 0.4;
      transform-origin: left;
      /* mix-blend-mode: difference; */

      .project-info-title {
        line-height: 6vw;
        font-family: "Bai Janjuree", sans-serif;
        font-weight: 600;
        font-size: 6vw;
        /* mix-blend-mode: difference; */
      }

      .project-info-description {
        line-height: 24px;
        font-family: "Bai Jamjuree";
        font-weight: 600;
        font-size: 24px;
        margin-top: 1em;
        text-transform: none;
      }

      .project-info-links {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 1em;

        a {
          text-decoration: none;
          color: #fafafa;
          display: inline-block;
          margin: 0.8em;
          padding: 0.8em 1.6em;
          border-radius: 20px;
          border: 0;
          background-color: var(--details-color);
          font-size: 0.8em;
          font-family: inherit;
          cursor: pointer;
          font-weight: bold;
          transition: background-color 200ms ease, color 200ms ease,
            transform 200ms ease;
          &:hover {
            background-color: #555;
            transform: scale(1.1);
          }
          &:active {
            transform: scale(0.95);
          }
        }
      }
    }

    .project-item-image,
    .banner {
      flex: 2;

      background-position: left;
      background-size: cover;
      transform-origin: right;
      /* max-width: 800px; */

      height: 80%;
      will-change: transform;
      transform: scale(0.7);
      transition: all 1s cubic-bezier(0.77, 0, 0.175, 1);
      filter: grayscale(100%) sepia(20%) brightness(80%);
      border-radius: 10px;
      overflow: hidden;
    }

    .banner {
      video {
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
    }
  }
`;
