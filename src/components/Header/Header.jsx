import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

function Header({ routeLinks }) {
  return (
    <div className="header">
      <div className="container">
        <ul className="header-list">
          {routeLinks.map((el, i) => {
            return (
              <li key={i}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "header-link active" : "header-link inactive"
                  }
                  to={el.link}
                >
                  {el.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Header;
