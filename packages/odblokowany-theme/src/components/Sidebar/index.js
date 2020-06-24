import React from "react";
import { connect, styled } from "frontity";
import logoImg from "../../img/logo.png";
import Link from "../Link";
import Footer from "./Footer";
import LinkFont from "../../styles/LinkFont";
import Button from "../../styles/Button";
import List from "../List"

const Sidebar = ({ state }) => {
  return (
    <Container>
      <div>
        <img src={logoImg} />
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
  max-width: 362px;
  margin: 2em 2.5em;
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
