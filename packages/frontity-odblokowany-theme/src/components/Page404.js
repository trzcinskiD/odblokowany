import React from "react";
import { styled } from "frontity";

const Page404 = () => (
  <Container>
    <h1>Oops! 404</h1>
    <div>
      Niestety nic nie znalazłem pod tym adresem...{" "}
      <span role="img" aria-label="confused face">
        😕
      </span>
    </div>
  </Container>
);

export default Page404;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  margin: 0 auto;
  text-align: center;
`;
