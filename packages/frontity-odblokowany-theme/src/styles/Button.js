import React from "react";
import { styled } from "frontity";
import { motion } from "framer-motion";

export default (props) => <Button whileTap={{ scale: 0.9 }}>{props.children}</Button>;

const Button = styled(motion.button)`
  white-space: nowrap;
  font-size: 0.75em;
  line-height: 1.417em;
  letter-spacing: 0.2em;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--lightText);
  cursor: pointer;
  border: 0;
  padding: 0.75em 1.5em;
  &:disabled {
    cursor: default;
    background: var(--border);
    color: var(--background);
  }
  ${({ type }) => {
    switch (type) {
      case "secondary":
        return `background: var(--special); color: var(--lightText);`;
      default:
        return `background: var(--lightText); color: var(--special);`;
    }
  }}
`;
