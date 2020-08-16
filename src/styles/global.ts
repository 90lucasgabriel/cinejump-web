import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  html {
    min-height: 100%;
    background: #F9F9F9;
  }
  body {
    background: #F9F9F9;
    color: #999999;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-family: 'Roboto', -apple-system, system-ui, sans-serif;
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 400,
  }
  button {
    cursor: pointer;
  }
`;
