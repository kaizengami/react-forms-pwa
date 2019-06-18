import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Lato', sans-serif;;
    src: url("https://fonts.googleapis.com/css?family=Lato&display=swap");
  }

  body,
  html {
    font-family: 'Lato';
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    margin: 0px;
    background-image: linear-gradient(to bottom, #181c23, #282f3a, #384352, #4a596c, #5b6f87);
    overflow-x: hidden;
  }

  button,
  input[type="submit"],
  input[type="reset"] {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
`;

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const PageWrapper = styled.main`
  display: flex;
  justify-content: center;
  flex: 1;
  padding: 10px;
`;
