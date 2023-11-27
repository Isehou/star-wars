import React from "react";
import { Link } from "react-router-dom";
import "./people-navigation.css";

function PeopleNavigation({ getResource, prevPage, nextPage, counterPage }) {
  const handleChangeNext = () => getResource(nextPage);
  const handleChangePrev = () => getResource(prevPage);
  return (
    <div className="pn-wrapper">
      <Link className="link" to={`/people/?page=${counterPage - 1}`}>
        <button
          onClick={handleChangePrev}
          disabled={!prevPage}
          className="buttons"
        >
          Previous
        </button>
      </Link>
      <Link className="link" to={`/people/?page=${counterPage + 1}`}>
        <button
          onClick={handleChangeNext}
          disabled={!nextPage}
          className="buttons"
        >
          Next
        </button>
      </Link>
    </div>
  );
}

export default PeopleNavigation;
