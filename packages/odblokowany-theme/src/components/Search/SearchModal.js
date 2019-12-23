import React, { useRef } from "react";
import { styled, connect, Global } from "frontity";
import { IconContext } from "react-icons";
import { FaTimes, FaSearch } from "react-icons/fa";
import useFocusTrap from "../hooks/use-trap-focus";
import useFocusEffect from "../hooks/use-focus-effect";

const SearchModal = ({ state, actions, libraries }) => {
  const parse = libraries.source.parse(state.router.link);
  const searchQuery = parse.query["s"];

  const { isSearchModalOpen } = state.theme;
  const { closeSearchModal } = actions.theme;

  const inputRef = useRef();
  const containerRef = useRef();

  useFocusEffect(inputRef, isSearchModalOpen);
  useFocusTrap(containerRef, isSearchModalOpen);

  const formatQuery = query =>
    query
      .trim()
      .replace(" ", "+")
      .toLowerCase();

  const handleSubmit = event => {
    event.preventDefault();
    const searchString = inputRef.current.value;

    if (searchString.trim().length > 0) {
      actions.router.set(`/?s=${formatQuery(searchString)}`);
      window.scrollTo(0, 0);
      closeSearchModal();
    }
  };

  return (
    <ModalOverlay
      role="presentation"
      data-open={isSearchModalOpen}
      onClick={closeSearchModal}
    >
      {isSearchModalOpen && (
        <Global styles={{ body: { overflowY: "hidden" } }} />
      )}
      <ModalInner
        role="dialog"
        aria-modal="true"
        onClick={event => event.stopPropagation()}
      >
        <SectionInner ref={containerRef}>
          <SearchForm
            role="search"
            aria-label="Search for:"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <SearchInput
              ref={inputRef}
              type="search"
              defaultValue={searchQuery || ""}
              placeholder="Szukaj na blogu"
              name="search"
            />
          </SearchForm>
          <IconContext.Provider value={{ className: "react-icons" }}>
            <FormButton onClick={handleSubmit}>
              <FaSearch />
            </FormButton>
            <FormButton onClick={closeSearchModal}>
              <FaTimes />
            </FormButton>
          </IconContext.Provider>
        </SectionInner>
      </ModalInner>
    </ModalOverlay>
  );
};

export default connect(SearchModal);

const ModalOverlay = styled.div`
  display: none;
  opacity: 0;
  bottom: 0;
  top: 0;
  position: fixed;
  width: 100%;
  z-index: 999;
  &[data-open="true"] {
    display: block;
    opacity: 1;
    left: 0;
  }
`;

const ModalInner = styled.div`
  background: var(--bg);
  cursor: default;
`;

const SectionInner = styled.div`
  margin: auto;
  display: flex;
  max-width: 980px;
  width: calc(100% - 40px);
  @media only screen and (min-width: 720px) {
    width: 50%;
  }
`;

const SearchForm = styled.form`
  margin: 0;
  position: relative;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
`;

const SearchInput = styled.input`
  background: var(--bg);
  color: var(--text);
  height: 50px;
  border: none;
  width: 100%;
  text-align: center;
  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
  }
  &:focus {
    outline: none;
  }
`;

const FormButton = styled.button`
  align-items: center;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  font-weight: 700;
  font-size: 1em;
  .react-icons {
    height: 1.5em;
    width: 1.5em;
  }
  & :hover {
    z-index: 999;
  }
`;
