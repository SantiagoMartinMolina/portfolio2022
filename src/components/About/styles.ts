import styled from "styled-components";

export const StyledAbout = styled.section`
  background-color: #f5f0ec;
  min-height: 100vh;
  padding: 2em;
  display: flex;
  justify-content: center;
  align-items: center;

  .about-container {
    height: 100%;
    color: #000;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

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
      .wrapper {
        opacity: 0;
        transform: translate(0);
      }
      &.is-reveal {
        .wrapper {
          opacity: 1;
        }
        opacity: 1;
      }
    }
  }
`;
