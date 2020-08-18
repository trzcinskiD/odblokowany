import { styled } from "frontity";

const LinkFont = styled.span`
  ${({ size }) => {
    switch (size) {
      case "small":
        return `font-size: 0.625em;
      line-height: 1.4em;
      letter-spacing: 0.01em;`;
      default:
        return `font-size: 0.75em;
      line-height: 1.417em;
      letter-spacing: 0.2em;`;
    }
  }}
  white-space: nowrap;
  font-weight: 500;
  text-transform: uppercase;
  color: var(--lightText);
  &:hover {
    color: var(--special);
  }
`;

export default LinkFont;
