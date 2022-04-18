import styled, { keyframes } from "styled-components";

const rotate = keyframes`
0%{
  transform: rotateZ(0);
}
100%{
  transform: rotateZ(360deg);
}
`;

const reveal = keyframes`
0%{
  transform: translateY(100%);
}
100%{
  transform: translateY(0);
}
`;

export const StyledContactForm = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: var(--bg-color-light);
  position: relative;

  .title {
    font-size: 7vw;
    margin-bottom: 1em;
    overflow: hidden;
    color: #000;

    span {
      display: inline-block;
      transform: translateY(100%);
      transition: transform 1s ease;

      &.is-reveal {
        transform: translateY(0);
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 900px;
    width: 90%;
    gap: 2em;

    div {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2em;
      input {
        flex: 1;
        width: 100%;
      }
    }
    label {
      clip: rect(0 0 0 0);
      border: 0;
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }
    textarea {
      width: 100%;
      min-height: 100px;
      resize: none;
    }

    input,
    textarea {
      padding: 1em;
      background-color: transparent;
      border: none;
      border-bottom: 3px solid #484d54;
      color: #000;
      outline: none;
      transition: all 500ms ease;
      border-radius: 10px;
      font-family: inherit;

      &:focus,
      &:hover {
        border-bottom: 3px solid var(--details-color);
        &::placeholder {
          color: var(--details-color);
        }
      }
    }

    button {
      background-color: transparent;
      border: 3px solid #484d54;
      padding: 0.5em 1em;
      border-radius: 10px;
      color: #484d54;
      font-size: 1.5em;
      cursor: pointer;
      transition: all 200ms ease;
      outline: none;
      display: flex;
      align-items: center;

      &:hover,
      &:focus {
        transform: scale(1.1);
        border: 3px solid var(--details-color);
        color: var(--details-color);
      }

      &:active {
        transform: scale(1);
      }

      .spinner {
        animation: ${rotate} 1.2s linear infinite;
        margin-right: 0.5em;
      }
    }

    button[disabled] {
      opacity: 0.7;
      cursor: default;
      transform: none !important;
    }
  }
  .success {
    color: #484d54;
    overflow: hidden;
    .success-text {
      display: inline-block;
      animation: ${reveal} 350ms cubic-bezier(0.77, 0, 0.175, 1);
    }
  }

  .container {
    width: 90%;
    margin-top: 1em;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    bottom: 10px;

    a {
      color: #000;
    }
    .btn-email {
      text-decoration: none;
      &:hover,
      &:focus,
      &:focus-visible {
        outline: none;
        text-decoration: underline #000;
      }
    }
  }

  @media (max-width: 1024px) {
    .success {
      margin-top: 2em;
    }

    .title {
      span {
        transform: translateY(0);
      }
    }

    form {
      margin-bottom: 5em;
      div {
        flex-direction: column;
      }
    }

    .container {
      flex-direction: column;
      a {
        &:hover {
          color: #000;
        }
      }
      .btn-email {
        margin: 1em 0;
      }
    }
  }
`;
