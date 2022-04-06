import styled from "styled-components";

export const StyledNavbar2 = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  color: #fafafa;

  nav {
    background-color: red;
    padding: 2em;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .menu {
      background-color: inherit;
      border: 1px solid #000;
      border-radius: 10px;
      padding: 0.5em 1em;
      background-color: gold;
      width: 100%;
      text-align: center;
      margin-bottom: 1em;
    }

    ul {
      list-style-type: none;
      background-color: blue;
      transform: scale(1);
      transition: transform 200ms ease;
      transform-origin: top center;

      a {
        text-decoration: none;
        color: inherit;
      }
    }
  }
`;
