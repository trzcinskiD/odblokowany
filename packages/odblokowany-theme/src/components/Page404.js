import React from "react";
import { styled } from "frontity";

const Page404 = () => (
  <Container>
    <Title>Oops! 404</Title>
    <Description>
      Niestety nic nie znalazłem pod tym adresem...{" "}
      <span role="img" aria-label="confused face">
        😕
      </span>
    </Description>
  </Container>
);

export default Page404;

const Container = styled.div`
  width: 800px;
  margin: 0;
  padding: 24px;
  text-align: center;
`;

const Title = styled.h1``;

const Description = styled.div``;
