import { connect, styled } from "frontity";
import React, { useRef } from "react";

const SearchForm = ({ state, actions, libraries }) => {
  const parse = libraries.source.parse(state.router.link);
  const searchQuery = parse.query["s"];
  const { closeSearchModal } = actions.theme;

  const inputRef = useRef();

  const handleSubmit = event => {
    event.preventDefault();
    const searchString = inputRef.current.value;

    if (searchString.trim().length > 0) {
      actions.router.set(`/?s=${searchString.toLowerCase()}`);
      window.scrollTo(0, 0);
      closeSearchModal();
    }
  };

  return (
    <Form role="search" aria-label="404 not found" onSubmit={handleSubmit}>
      <input
        defaultValue={searchQuery}
        placeholder="Szukaj na blogu"
        ref={inputRef}
      />
      <button type="submit">Szukaj</button>
    </Form>
  );
};

export default connect(SearchForm);

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  input,
  textarea {
    font-family: inherit;
    font-size: 0.9em;
    line-height: inherit;
    width: 100%;
    background: var(--bg);
    outline: none;
    border: none;
    transition: box-shadow 0.3s ease;
    margin-top: 1rem;
    padding: 0.75rem 1rem;
    &:focus {
      box-shadow: var(--shadow) 0px 0px 10px 0px;
    }
  }
  & button {
    margin: 0.5rem;
  }
`;
