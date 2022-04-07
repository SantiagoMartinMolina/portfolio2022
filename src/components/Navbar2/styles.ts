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
    /* background-color: red; */
    padding: 2em;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    .menu-btn {
      background-color: inherit;
      border: 1px solid #000;
      border-radius: 10px;
      padding: 0.5em 1em;
      background-color: gold;
      width: 100%;
      text-align: center;
      margin-bottom: 1em;
      z-index: 10;
    }

    ul {
      z-index: 10;
      list-style-type: none;
      /* background-color: blue; */
      /* transform: scale(0); */
      /* transition: transform 200ms ease;
      transform-origin: top center; */

      li {
        overflow: hidden;
        transition: 0.3s;

        &:hover {
          transform: scale(1.1);
        }
      }

      a {
        text-decoration: none;
        color: #000;
        font-size: 1em;
        display: flex;
        overflow: hidden;
        transition: 0.3s;
        position: relative;
        transform: translateY(100%);
        opacity: 0;
      }
    }

    .nav-bg {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      padding: 5px;
      opacity: 0;
      transform: scale(0.9);
      z-index: 1;
      div {
        width: 100%;
        height: 100%;
        background: #fafafa;
        border-radius: 15px;
      }
    }
  }
`;
