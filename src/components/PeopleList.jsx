import React from "react";

import "./people-list.css";

function PeopleList({ people }) {
  return (
    <ul className="list__container">
      {people.map(({ id, name, img }) => (
        <li className="list__item" key={id}>
          <a href="#">
            <img className="person-img" src={img} alt={name} />
            <p>{name}</p>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default PeopleList;
