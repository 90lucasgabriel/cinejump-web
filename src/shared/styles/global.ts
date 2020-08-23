import { createGlobalStyle } from 'styled-components';
import { Color, Size } from 'shared/enums';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
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
  }
  body, input, button {
    font-family: 'Ubuntu', -apple-system, system-ui, sans-serif;
    font-weight: 100;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 400,
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
