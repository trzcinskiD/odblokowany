import React, { useEffect } from "react";
import { connect } from "frontity";
import Link from "./Link";
import Button from "../styles/Button";

const Pagination = ({ state, actions, libraries }) => {
  const { totalPages } = state.source.get(state.router.link);
  const { path, page, query } = libraries.source.parse(state.router.link);

  const isThereNextPage = page < totalPages;
  const isTherePreviousPage = page > 1;

  const nextPageLink = libraries.source.stringify({
    path,
    page: page + 1,
    query,
  });

  const prevPageLink = libraries.source.stringify({
    path,
    page: page - 1,
    query,
  });

  useEffect(() => {
    if (isThereNextPage) actions.source.fetch(nextPageLink);
  }, []);

  return (
    <div>
      {isThereNextPage && (
        <Link link={nextPageLink}>
          <Button>Starsze posty</Button>
        </Link>
      )}
      {isTherePreviousPage && isThereNextPage && " - "}
      {isTherePreviousPage && (
        <Link link={prevPageLink}>
          <Button>Nowsze posty</Button>
        </Link>
      )}
    </div>
  );
};

export default connect(Pagination);
