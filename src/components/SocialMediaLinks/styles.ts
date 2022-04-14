import styled from "styled-components";

export const StyledSocialMediaLinks = styled.div`
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
      font-size: 1.25vw;
      font-weight: 300;
      position: relative;
      display: flex;
      overflow: hidden;
      border-radius: 20px;
      padding: 0.6em 1.2em;
      &:hover,
      &:focus {
        background-color: var(--details-color);
        outline: none;
        color: #fafafa;
      }
    }
  }
  @media (min-width: 1024px) {
    ul a {
      transform: translateY(100%);
    }
  }

  @media (max-width: 800px) {
    ul {
      display: flex;
      justify-content: center;
      a {
        font-size: 1.2em;
        padding: 0;
        border-radius: 0px;

        &:hover {
          background-color: transparent;
        }
      }
    }
  }
`;
