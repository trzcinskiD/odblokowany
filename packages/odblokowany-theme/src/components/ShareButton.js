import React, { useState } from "react";
import { styled } from "frontity";
import { TelegramShareButton, FacebookShareButton, LinkedinShareButton, TwitterShareButton } from "react-share";
import { FaTelegramPlane, FaFacebook, FaLinkedin, FaTwitter, FaShareAlt } from "react-icons/fa";

const ShareButton = ({ shareUrl, size }) => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <Menu size={size}>
      <FaShareAlt onClick={toggleMenu} />
      <FacebookShareButton className={`item ${open && "left-wide"}`} url={shareUrl}>
        <FaFacebook />
      </FacebookShareButton>
      <TelegramShareButton className={`item ${open && "left-short"}`} url={shareUrl}>
        <FaTelegramPlane />
      </TelegramShareButton>
      <LinkedinShareButton className={`item ${open && "right-short"}`} url={shareUrl}>
        <FaLinkedin />
      </LinkedinShareButton>
      <TwitterShareButton className={`item ${open && "right-wide"}`} url={shareUrl}>
        <FaTwitter />
      </TwitterShareButton>
    </Menu>
  );
};

export default ShareButton;

const Menu = styled.div`
  color: var(--lightText);
  cursor: pointer;
  font-size: ${({ size }) => `${size}`};
  position: relative;
  .react-icons {
    cursor: pointer;
  }
  .react-icons:hover {
    color: var(--text);
  }
  .item {
    position: absolute;
    left: 0;
    transform: translate(0px, 0px);
    transition: transform 0.5s, opacity 1s;
    transition: 0.5s;
    opacity: 0;
    visibility: hidden;
    box-shadow: none;
  }
  .left-short {
    transform: translateX(-1.5em);
    transition-delay: 0.4s;
    opacity: 1;
    visibility: visible;
  }
  .right-short {
    transform: translateX(1.5em);
    transition-delay: 0.4s;
    opacity: 1;
    visibility: visible;
  }
  .right-wide {
    transform: translateX(3em);
    transition-delay: 0.2s;
    opacity: 1;
    visibility: visible;
  }
  .left-wide {
    transform: translateX(-3em);
    transition-delay: 0.2s;
    opacity: 1;
    visibility: visible;
  }
`;
