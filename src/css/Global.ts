import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    --theme-color: rgb(69   129	121	);
    --theme-color-light: #00b99f;
    --bkg-color: rgb(241 236 238);
}

  body {
    background: var(--bkg-color);
  }

  h1 {
    font-size: 36px;
    font-weight: 600;
    display:block;
  }

  h2 {
    font-size: 28px;
    font-weight: 500;
  }

  ul {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }

  .grid {
    grid-gap: 20px;
    display: grid;
    grid-template-columns: 1fr auto;
    padding-top: 40px;
  }

  .active {
    font-weight: bold;
  }

  p {
    font-size: 18px;
    line-height: 30px;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
`;

export default GlobalStyle;
