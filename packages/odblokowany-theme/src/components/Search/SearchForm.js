import React, { useRef } from "react";
import { connect } from "frontity";
import { motion } from "framer-motion";
import OutsideClickHandler from "react-outside-click-handler";
import useFocusEffect from "../../util/hooks/use-focus-effect";

const SearchForm = ({ state, actions, libraries }) => {
  const parse = libraries.source.parse(state.router.link);
  const searchQuery = parse.query["s"];
  const { isSearchOpen } = state.theme;

  const inputRef = useRef();

  useFocusEffect(inputRef, isSearchOpen);

  const formatQuery = (query) => query.trim().replace(" ", "+").toLowerCase();

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchString = inputRef.current.value;
    if (searchString.trim().length > 0) {
      actions.router.set(`/?s=${formatQuery(searchString)}`);
      window.scrollTo(0, 0);
    }
  };

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        actions.theme.closeSearch();
      }}
    >
      {isSearchOpen && (
        <motion.form
          role="search"
          aria-label="Search for:"
          onSubmit={handleSubmit}
          autoComplete="off"
          initial={{ opacity: 0, x: 100, visibility: "hidden" }}
          animate={{ opacity: 1, x: 0, visibility: "" }}
        >
          <input
            ref={inputRef}
            type="search"
            defaultValue={searchQuery || ""}
            placeholder="Szukaj na blogu"
            name="search"
          />
        </motion.form>
      )}
    </OutsideClickHandler>
  );
};

export default connect(SearchForm);
