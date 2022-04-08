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

    .subtitle {
      overflow: hidden;
      span {
        display: inline-block;
      }
    }
  }

  .landing-bottom {
    ul {
      list-style-type: none;
      display: flex;
      gap: 1.2em;

      li {
        overflow: hidden;
        transition: 0.3s;

        &:hover {
          transform: scale(1.07);
        }
      }

      a {
        text-decoration: none;
        color: #fafafa;
        font-size: 2vw;
        font-weight: 300;
        position: relative;
        display: flex;
        overflow: hidden;

        &::before {
          content: "";
          position: absolute;
          top: 0;
          right: 100%;
          width: 50%;
          height: 1px;
          background: #fafafa;
          transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
        }

        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 100%;
          width: 50%;
          height: 1px;
          background: #fafafa;
          transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
        }

        &:hover::before {
          right: 0;
        }

        &:hover::after {
          left: 0;
        }
      }
    }
  }
  @media (min-width: 1024px) {
    .landing-bottom ul a {
      transform: translateY(100%);
    }
  }
`;
