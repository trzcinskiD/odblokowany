import React from "react";
import { connect } from "frontity";

const Link = ({
  actions,
  link,
  className,
  children,
  rel,
  "aria-current": ariaCurrent,
  onClick: onClickProp
}) => {
  const isExternal = link.startsWith("http");

  const onClick = event => {
    if (isExternal) return;
    event.preventDefault();
    actions.router.set(link);
    window.scrollTo(0, 0);
    if (onClickProp) {
      onClickProp(event);
    }
  };

  return (
    <a
      href={link}
      onClick={onClick}
      className={className}
      aria-current={ariaCurrent}
      rel={isExternal ? "noopener noreferrer" : rel}
      onMouseEnter={() => actions.source.fetch(link)}
    >
      {children}
    </a>
  );
};

export default connect(Link);
