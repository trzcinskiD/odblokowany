import React from "react";
import { connect, styled } from "frontity";
import Image from "@frontity/components/image";

const FeaturedMedia = ({ state, id, clickable = false }) => {
  const media = state.source.attachment[id];
  if (!media) return null;
  const srcset =
    Object.values(media.media_details.sizes)
      .map(item => [item.source_url, item.width])
      .reduce(
        (final, current, index, array) =>
          final.concat(
            `${current.join(" ")}w${index !== array.length - 1 ? ", " : ""}`
          ),
        ""
      ) || null;
  return (
    <Container>
      <StyledImage
        alt={media.title.rendered}
        src={media.source_url}
        srcSet={srcset}
        clickable={clickable}
      />
    </Container>
  );
};

export default connect(FeaturedMedia);

const Container = styled.div`
  margin-top: 16px;
  height: 300px;
`;

const StyledImage = styled(Image)`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
  ${({ clickable }) => (clickable ? "&:hover { opacity: 0.9 }" : null)}
`;
