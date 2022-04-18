import styled from "styled-components";

export const StyledProjects = styled.section`
  background-color: rgb(12, 12, 12);
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
    width: fit-content;
    display: flex;
    flex-wrap: nowrap;
    height: 100vh;
  }

  @media (max-width: 1024px) {
    .title {
      span {
        transform: translateY(0);
      }
    }
    .projects-container {
      height: auto;
      display: block;
      width: 90%;
      margin: auto;
      margin-bottom: calc(50px + 4em);
    }
  }
`;

export const StyledProjectItem = styled.div`
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
    width: 100%;
    height: 100%;
    position: relative;
    will-change: transform;
    gap: 2em;

    .project-item-info {
      z-index: 1;
      color: inherit;
      flex: 1;
      will-change: transform;
      transform: scale(0.7);
      transition: all 1s cubic-bezier(0.77, 0, 0.175, 1);
      filter: grayscale(100%) sepia(20%) brightness(80%);
      opacity: 0.4;
      transform-origin: left;

      .project-info-title {
        line-height: 6vw;
        font-family: "Bai Jamjuree", sans-serif;
        font-weight: 600;
        font-size: 6vw;
        text-shadow: 3px 3px 5px #000;
      }

      .project-info-description {
        line-height: 24px;
        font-family: "Bai Jamjuree";
        font-weight: 600;
        font-size: 24px;
        margin-top: 1em;
        text-transform: none;
        text-shadow: 3px 3px 3px #000;
      }

      .project-info-links {
        display: flex;
        align-items: center;
        margin: 1em 0;

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

      height: 80%;
      will-change: transform;
      transform: scale(0.7);
      transition: all 1s cubic-bezier(0.77, 0, 0.175, 1);
      filter: grayscale(100%) sepia(20%) brightness(80%);
      border-radius: 10px;

      .svg-container {
        position: absolute;
        top: calc(100% + 1em);
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        gap: 2em;
        width: fit-content;
        div {
          display: flex;
          align-items: center;
          gap: 0.5em;
        }
      }

      svg {
        width: 25px;
        height: 25px;
        fill: #fafafa;
      }

      span {
        font-size: 0.6em;
      }
    }

    .banner {
      background-color: #222;
      video {
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
    }
  }
  @media (max-width: 1024px) {
    padding: 0;
    width: 100%;

    &.project-item-wrapper.is-reveal {
      .project-item-image,
      .banner {
        transform: scale(1);
        opacity: 1;
      }

      .project-item {
        .project-item-info {
          transform: scale(1);
          transform: translateX(0);
          filter: none;
          opacity: 1;
        }
      }

      .project-info-links {
        justify-content: space-around;
      }
    }

    .project-item {
      display: block;

      .project-item-info {
        margin-top: calc(50px + 4em);
        filter: none;
        opacity: 1;
        transform: scale(1);
        transition: none;

        .project-info-description {
          font-weight: 400;
          font-size: 1em;
        }
      }

      .project-item-image,
      .banner {
        display: block;
        width: 100%;
        height: 350px;
        filter: none;
        transform: scale(1);
        transition: none;

        svg {
          width: 20px;
          height: 20px;
        }

        span {
          font-size: 0.4em;
        }
      }
    }
  }
`;
