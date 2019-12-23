import { css } from "frontity";
import backgroundPattern from "../img/cream_dust.png";
import InterMediumLatin from "./fonts/inter/Inter-Medium-LATIN.woff2";
import InterSemiBoldLatin from "./fonts/inter/Inter-SemiBold-LATIN.woff2";
import InterBoldLatin from "./fonts/inter/Inter-Bold-LATIN.woff2";

const colorSetup = colorOption => {
  switch (colorOption) {
    case "1":
      return css`
        :root {
          --bg: #ebebea;
          --shadow: #c3b6af;
          --text-color: #415146;
          --light-text: #c7995d;
          --error: #b22910;
        }
      `;
    default:
      return css`
        :root {
          --bg: #f0f0f1;
          --shadow: #37363a;
          --text-color: #37363a;
          --light-text: #817c78;
          --error: #b22910;
        }
      `;
  }
};

const documentSetup = css`
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(${InterMediumLatin}) format("woff2");
  }

  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(${InterSemiBoldLatin}) format("woff2");
  }

  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(${InterBoldLatin}) format("woff2");
  }

  html {
    box-sizing: border-box;
    height: 100%;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  body {
    color: var(--text-color);
    margin: 0;
    display: flex;
    flex-direction: column;
    background-image: url(${backgroundPattern});
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue",
      Helvetica, Arial, "Lucida Grande", sans-serif;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  nav,
  button,
  label,
  input {
    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Helvetica Neue",
      Helvetica, sans-serif;
  }
  h1 {
    font-size: 37px;
    line-height: 58px;
    margin-bottom: 30px;
  }
  h2 {
    font-size: 29px;
    line-height: 46px;
    margin-top: 49px;
    margin-bottom: 19px;
  }
  h3 {
    font-size: 23px;
    line-height: 38px;
    margin-top: 30px;
    margin-bottom: 12px;
  }
  h4 {
    font-size: 18px;
    line-height: 30px;
    margin-bottom: 7px;
  }
  h5 {
    color: var(--light-text);
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  button {
    transition: box-shadow 0.3s ease;
    cursor: pointer;
    border: 0;
    background: var(--bg);
    padding: 0.6rem;
    vertical-align: middle;
    text-transform: uppercase;
    font-size: 0.65em;
    font-weight: 600;
    &:hover {
      box-shadow: var(--shadow) 0px 0px 10px 0px;
    }
    &:disabled {
      box-shadow: none;
      cursor: default;
    }
  }
`;

const globalStyles = colorOption =>
  css([colorSetup(colorOption), documentSetup]);

export default globalStyles;
