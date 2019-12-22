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
  width: 800px;
  margin: 0;
  padding: 24px;
  text-align: center;
`;
