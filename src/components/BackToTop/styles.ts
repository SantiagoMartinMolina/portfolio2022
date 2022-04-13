import styled from "styled-components";

export const StyledBackToTop = styled.button`
  border: 0;
  border-radius: 0;
  position: fixed;
  bottom: 2em;
  right: 2em;
  animation: fadeIn 0.3s;
  transition: all 0.3s;
  padding: 0.3em;
  background-color: transparent;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #000;
    font-size: 1em;
    text-transform: uppercase;
  }

  svg {
    font-size: 2em;
    margin-left: 10px;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
