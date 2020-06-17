import { css } from "frontity";
import backgroundPattern from "../img/cream_dust.png";
import InterRegularLatin from "./fonts/inter/Inter-Regular.woff2";
import InterMediumLatin from "./fonts/inter/Inter-Medium.woff2";
import InterSemiBoldLatin from "./fonts/inter/Inter-SemiBold.woff2";
import InterBoldLatin from "./fonts/inter/Inter-Bold.woff2";

const colorSetup = (colorOption) => {
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
          --text: #242423;
          --border: #e5e5e5;
          --white: #fff;
          --bg: #f0f0f1;
          --shadow: #37363a;
          --light-text: #5b5752;
          --special: #8b7300;
          --special-background: #c8b27229;
          --error: #b22910;
        }
      `;
  }
};

const documentSetup = css`
  @font-face {
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${InterRegularLatin}) format("woff2");
  }

  @font-face {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(${InterMediumLatin}) format("woff2");
  }

  @font-face {
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(${InterSemiBoldLatin}) format("woff2");
  }

  @font-face {
    font-family: Inter;
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
  :after,
  :before {
    box-sizing: inherit;
  }
  body {
    color: var(--text);
    margin: 0;
    display: flex;
    flex-direction: column;
    background-image: url(${backgroundPattern});
    font-family: HelveticaNeue-Light, "Helvetica Neue Light", "Helvetica Neue",
      Helvetica, Arial, "Lucida Grande", sans-serif;
  }
  p {
    font-size: 1em;
  }
  #root {
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
  }
  button,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  label,
  nav {
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Helvetica Neue",
      Helvetica, sans-serif;
  }
  h1 {
    font-size: 37px;
    line-height: 58px;
    margin-bottom: 30px;
    text-align: center;
  }
  h2 {
    font-size: 29px;
    line-height: 46px;
    margin-top: 49px;
    margin-bottom: 19px;
  }
  h3 {
    font-size: 1.125em;
    line-height: 1.375em;
    font-weight: bold;
    letter-spacing: -0.014em;
  }
  h4 {
    font-weight: 500;
    font-size: 0.875em;
    line-height: 1.063em;
    letter-spacing: -0.006em;
  }
  h5 {
    color: var(--light-text);
  }
  a, a:visited {
    color: inherit;
    text-decoration: none;
    background-image: linear-gradient(currentColor, currentColor);
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 0% 0.125em;
    transition: background-size cubic-bezier(0, 0.5, 0, 1) 0.5s;
  }
  a:hover,
  a:focus {
    background-size: 100% 0.125em;
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
      box-shadow: var(--shadow) 0 0 10px 0;
    }
    &:disabled {
      box-shadow: none;
      cursor: default;
    }
  }
  input {
    background: var(--white);
    border: 1px solid var(--border);
    box-sizing: border-box;
    padding: 0.75em 1.5em;
    &:focus {
      outline-color: var(--special);
    }
    &[type="search"] {
      &::-webkit-search-decoration,
      &::-webkit-search-cancel-button,
      &::-webkit-search-results-button,
      &::-webkit-search-results-decoration {
        display: none;
      }
    }
  }
`;

const globalStyles = (colorOption) =>
  css([colorSetup(colorOption), documentSetup]);

export default globalStyles;
