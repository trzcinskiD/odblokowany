import { css } from "frontity";
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
          --lightText: #c7995d;
          --error: #b22910;
        }
      `;
    default:
      return css`
        :root {
          --white: #fff;
          --black: #000;
          --background: #fbfbfb;
          --text: #242423;
          --lightText: #333533;
          --border: #e5e5e5;
          --special: #f5cb5c;
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
    background-color: var(--background);
    font-family: HelveticaNeue-Light, "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
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
  nav,
  span {
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, sans-serif;
  }
  h1 {
    font-size: 2.5em;
    letter-spacing: -0.022em;
    line-height: 1.4em;
  }
  h2 {
    font-size: 1.875em;
    letter-spacing: -0.021em;
    line-height: 1.4em;
    font-weight: bold;
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
    font-size: 0.75em;
    letter-spacing: 0em;
    line-height: 1.417em;
    color: var(--lightText);
  }
  a,
  a:visited {
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

const globalStyles = (colorOption) => css([colorSetup(colorOption), documentSetup]);

export default globalStyles;
