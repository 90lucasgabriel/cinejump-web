import { createGlobalStyle, css } from 'styled-components';
import { Color, Size } from 'shared/enums';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Ubuntu', -apple-system, system-ui, sans-serif;
  }
  html {
    min-height: 100%;
    background: ${Color.Fill};
    font-size: 62.5%;
  }

  @media (max-width: 900px) {
    html {
      font-size: 50.668%;
    }
  }

  body {
    background: ${Color.Fill};
    color: ${Color.Text};
    font-size: ${Size.Default};
    -webkit-font-smoothing: antialiased;

    ${
      process.env.REACT_APP_IS_PRODUCTION === 'false' &&
      css`
        /* margin-top: ${Size.Large}; */
      `
    }
  }
  body, input, button {
    font-weight: 100;
  }
  h1, strong {
    font-weight: 400,
  }

  h2, h3, h4, h5, h6 {
    font-weight: 100;
  }

  button {
    cursor: pointer;
  }

  input,
  textarea,
  button,
  select,
  a {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
`;
