import React from "react";
import { connect, styled } from "frontity";
import Image from "@frontity/components/image";

const FeaturedMedia = ({ state, id, clickable = false, height, fullWidth = false }) => {
  const media = state.source.attachment[id];
  if (!media) return null;
  const srcset =
    Object.values(media.media_details.sizes)
      .map((item) => [item.source_url, item.width])
      .reduce((final, current, index, array) => final.concat(`${current.join(" ")}w${index !== array.length - 1 ? ", " : ""}`), "") || null;
  return (
    <Container height={height}>
      <StyledImage alt={media.title.rendered} src={media.source_url} srcSet={srcset} clickable={clickable} fullWidth={fullWidth} />
    </Container>
  );
};

export default connect(FeaturedMedia);

const Container = styled.div`
  height: ${({ height }) => height}px;
`;

const StyledImage = styled(Image)`
  height: 100%;
  ${({ fullWidth }) =>
    fullWidth
      ? `  width: 100vw;
      position: relative;
      left: 50%;
      right: 50%;
      margin-left: -50vw;
      margin-right: -50vw;
      object-fit: scale-down;`
      : `width: 100%;
  object-fit: cover;`}
  ${({ clickable }) => (clickable ? "&:hover { opacity: 0.9 }" : null)}
`;
