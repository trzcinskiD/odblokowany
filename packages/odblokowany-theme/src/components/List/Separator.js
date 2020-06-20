import { styled } from "frontity";

const Separator = styled.hr`
  color: var(--lightText);
  margin: 3rem auto;
  width: 100%;
  opacity: 0.6;
  background: linear-gradient(
    to left,
    currentColor calc(50% - 16px),
    transparent calc(50% - 16px),
    transparent calc(50% + 16px),
    currentColor calc(50% + 16px)
  );
  background-color: transparent !important;
  border: none;
  height: 0.1rem;
  overflow: visible;
  position: relative;
  max-width: 980px;

  &:before,
  &:after {
    background: var(--lightText);
    content: "";
    display: block;
    height: 1.6rem;
    position: absolute;
    top: calc(50% - 0.8rem);
    transform: rotate(22.5deg);
    width: 0.1rem;
  }

  &:before {
    left: calc(50% - 0.5rem);
  }

  &:after {
    right: calc(50% - 0.5rem);
  }
`;

export default Separator;
