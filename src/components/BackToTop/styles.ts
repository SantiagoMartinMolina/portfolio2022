import styled from "styled-components";

export const StyledBackToTop = styled.button`
  border: 0;
  border-radius: 0;
  position: fixed;
  bottom: 2em;
  right: 2em;
  transition: all 0.3s;
  padding: 0.3em;
  background-color: transparent;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #777;
    font-size: 1.2em;
    text-transform: uppercase;
    transition: color 200ms ease;
    &:hover {
      color: var(--details-color);
    }
  }

  svg {
    font-size: 2em;
    margin-left: 10px;
  }

  @media (max-width: 1024px) {
    background-color: var(--details-color);
    display: flex;
    justify-content: center;
    padding: 0.7em;
    border-radius: 50%;

    .text {
      display: none;
    }
    svg {
      font-size: 1.5em;
      margin-left: 0;
      color: #fafafa;
    }
  }
`;
