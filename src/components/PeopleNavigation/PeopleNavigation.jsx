import React from "react";
import { Link } from "react-router-dom";
import UiButton from "../UI-kit/UiButton/UiButton";

import "./people-navigation.css";

function PeopleNavigation({ getResource, prevPage, nextPage, counterPage }) {
  const handleChangeNext = () => getResource(nextPage);
  const handleChangePrev = () => getResource(prevPage);
  return (
    <div className="pn-wrapper">
      <Link className="link" to={`/people/?page=${counterPage - 1}`}>
        <UiButton
          text="Previous"
          onClick={handleChangePrev}
          disabled={!prevPage}
        ></UiButton>
      </Link>
      <Link className="link" to={`/people/?page=${counterPage + 1}`}>
        <UiButton
          text="Next"
          onClick={handleChangeNext}
          disabled={!nextPage}
        ></UiButton>
      </Link>
    </div>
  );
}

export default PeopleNavigation;
