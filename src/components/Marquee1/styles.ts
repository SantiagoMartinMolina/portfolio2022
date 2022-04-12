import styled from "styled-components";

export const StyledMarquee1 = styled.section`
  /* height: 8rem; */
  width: 100vw;
  position: relative;
  z-index: 9;
  overflow: hidden;
  font-size: 1.5em;
  font-family: "syncopate", sans-serif;

  .top {
    background-color: #fafafa;
    color: #000;
    padding: 0.2em;
  }

  .bottom {
    background-color: #000;
    color: #fafafa;
    padding: 0.2em;
  }

  .text {
    white-space: nowrap;
  }
`;
