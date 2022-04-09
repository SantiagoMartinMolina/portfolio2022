import styled from "styled-components";

export const StyledNavbar2 = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;

  .logo {
    margin-top: 32px;
    margin-left: 32px;
    line-height: 0.75;
    overflow: hidden;

    span {
      display: inline-block;
      mix-blend-mode: difference;
    }
  }

  nav {
    padding: 2em;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    .menu-btn-container {
      overflow: hidden;
      z-index: 9;
    }

    .menu-btn {
      background-color: inherit;
      border: 1px solid #000;
      border-radius: 10px;
      padding: 0.25em 0.5em;
      background-color: #fafafa;
      text-align: center;
      margin-bottom: 1em;
      z-index: 10;
      color: #000;
      cursor: pointer;
      user-select: none;
      font-family: inherit;
      text-transform: uppercase;
    }

    ul {
      z-index: 10;
      list-style-type: none;

      li {
        overflow: hidden;
        transition: 0.3s;

        &:hover {
          transform: scale(1.1);
        }
        span {
          color: #000;
          font-size: 1em;
          display: block;
          overflow: hidden;
          transition: 0.3s;
          position: relative;
          transform: translateY(100%);
          opacity: 0;
          cursor: pointer;
        }
      }
    }

    .nav-bg {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      opacity: 0;
      transform: scale(0.9);
      z-index: 1;
      div {
        width: 100%;
        height: 100%;
        background: #fafafa;
        border-radius: 20px;
        border: 1px solid #000;
      }
    }
  }

  @media (max-width: 1024px) {
    padding: 1rem;

    .logo {
      margin-top: 16px;
      margin-left: 16px;
    }

    nav {
      padding: 1em;

      .menu-btn-container {
        width: 100%;
        display: flex;
        justify-content: flex-end;
      }
    }
  }
`;
