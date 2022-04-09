import styled from "styled-components";

export const StyledContactForm = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

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
      color: #aebcce;
      outline: none;
      transition: all 500ms ease;
      border-radius: 10px;
      font-family: inherit;

      &:focus {
        border-bottom: 3px solid #aebcce;
        &::placeholder {
          color: #aebcce;
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

      &:hover,
      &:focus {
        transform: scale(1.1);
        border: 3px solid #aebcce;
        color: #aebcce;
      }

      &:active {
        transform: scale(1);
      }
    }
  }

  @media (max-width: 1024px) {
    form {
      div {
        flex-direction: column;
      }
    }
  }
`;
