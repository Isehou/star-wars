import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header({ routeLinks }) {
  return (
    <div className="header">
      <div className="container">
        <ul className="header-list">
          {routeLinks.map((el, i) => {
            return (
              <li key={i}>
                <Link className="header-link" to={el.link}>
                  {el.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Header;
