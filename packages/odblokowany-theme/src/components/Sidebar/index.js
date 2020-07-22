import React from "react";
import { connect, styled } from "frontity";
import lightLogo from "../../img/light_logo_transparent_withoutTitle.png";
import darkLogo from "../../img/dark_logo_transparent_withoutTitle.png";
import Link from "../Link";
import Footer from "./Footer";
import LinkFont from "../../styles/LinkFont";
import Button from "../../styles/Button";
import List from "../List";

const Sidebar = ({ state }) => {
  return (
    <Container>
      <div>
        <Logo src={state.theme.mode === "dark" ? lightLogo : darkLogo} />
        <h1>{state.frontity.title}</h1>
        <p>{state.frontity.brandDescription}</p>
      </div>
      <Separator />
      <div>
        <h2>O mnie</h2>
        <p>Informacja wstępna o mnie</p>
        <Link link={`/about/`}>
          <LinkFont>Chcę więcej..</LinkFont>
        </Link>
      </div>
      <Separator />
      <div>
        <h3>Bądź na bieżąco. Zapisz się do newslettera.</h3>
        <NewsletterForm>
          <input placeholder="Jak się do Ciebie zwracać?" />
          <input placeholder="E-mail" />
          <Button>Zapisuję się</Button>
        </NewsletterForm>
      </div>
      <Separator />
      <div>
        <h3>Najnowsze posty</h3>
        <List articleSize="small" maxCount={3} />
      </div>
      <Separator />
      <Footer />
    </Container>
  );
};

export default connect(Sidebar);

const Container = styled.div`
  margin: 2em 2.5em;
  flex: 1 3 0;
  text-align: center;
  @media (max-width: 767.98px) {
    margin: 2em 1em;
  }
`;

const Logo = styled.img`
  height: 10em;
  width: 10em;
`;

const Separator = styled.hr`
  margin: 3em 0;
`;

const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  & button {
    align-self: center;
  }
  & input {
    margin-bottom: 1.5em;
    width: 100%;
  }
`;
