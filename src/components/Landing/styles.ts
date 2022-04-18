import styled from "styled-components";

export const StyledLanding = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
  padding: 2em;

  .landing-centered {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
      font-size: 7vw;
      font-weight: 300;
      line-height: 1.1em;
      overflow: hidden;
      span {
        display: inline-block;
      }
    }
  }
`;
