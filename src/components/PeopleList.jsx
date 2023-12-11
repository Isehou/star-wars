import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./people-list.css";

function PeopleList({ people }) {
  return (
    <ul className="list__container">
      {people.map(({ id, name, img }) => (
        <li className="list__item" key={id}>
          <Link to={`/people/${id}`} href="#">
            <img className="person-img" src={img} alt={name} />
            <p>{name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

PeopleList.propTypes = {
  people: PropTypes.array,
};

export default PeopleList;
