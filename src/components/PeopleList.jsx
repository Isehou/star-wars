import React from "react";

import "./people-list.css";

function PeopleList({ people }) {
  return (
    <ul>
      {people.map(({ id, name, img }) => (
        <li key={id}>
          <img src={img} alt={name} />
          <p>{name}</p>
        </li>
      ))}
    </ul>
  );
}

export default PeopleList;
