import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
  }

  body,
  input,
  textarea,
  select,
  button {
    font: 400 1rem '', sans-serif;
  }

  button {
    border: 0;
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  body {
    background-color: #e3e3e3e3;
    font-family: '';
  }
`
