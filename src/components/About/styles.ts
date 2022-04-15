import styled from "styled-components";

export const StyledAbout = styled.section`
  background-color: var(--bg-color-light);
  min-height: 100vh;
  padding: 2em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  .btn-cv {
    color: #000;
    text-decoration: none;
    transition: all 200ms ease;
    border-radius: 20px;
    padding: 0.6em 1.2em;
    font-size: 1.25vw;

    &:hover {
      background-color: var(--details-color);
      transform: scale(1.07);
      color: #fafafa;
    }
  }

  .about-container {
    height: 100%;
    color: #000;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    .title {
      font-size: 7vw;
      margin-bottom: 1em;
      overflow: hidden;

      span {
        display: inline-block;
        transform: translateY(100%);
        transition: transform 1s ease;

        &.is-reveal {
          transform: translateY(0);
        }
      }
    }

    .text-container {
      opacity: 0;
      font-size: 1.4em;
      text-transform: none;
      max-width: 900px;
      display: flex;
      justify-content: center;
      align-items: center;

      > div {
        width: 100%;
      }

      .wrapper {
        opacity: 0;
        transform: translate(0);
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      &.is-reveal {
        .wrapper {
          opacity: 1;
        }
        opacity: 1;
      }
    }
  }

  @media (max-width: 1024px) {
    padding: 1em;
    .about-container {
      .title {
        span {
          transform: translateY(0);
        }
      }

      .text-container {
        font-size: 1em;
        width: 100%;
      }
    }

    .btn-cv {
      font-size: 1.2em;
      padding: 0;
      border-radius: 0px;

      &:hover {
        background-color: transparent;
      }
    }
  }
`;
