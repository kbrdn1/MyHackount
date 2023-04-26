import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNav = (props) => {
  const [active] = useState(props.home || props.profil || props.trending);
  return (
    <div className="left-nav-container">
      <div className="icons">
        <div className="icons-bis">
          <NavLink
            to="/"
            className={active === props.home ? "active-left-nav" : null}
          >
            <img src="./img/icons/home.svg" alt="home" />
          </NavLink>
          <br />
          <NavLink
            to="/trending"
            className={active === props.trending ? "active-left-nav" : null}
          >
            <img src="./img/icons/rocket.svg" alt="trending" />
          </NavLink>
          <br />
          <NavLink
            to="/profil"
            className={active === props.profil ? "active-left-nav" : null}
          >
            <img src="./img/icons/user.svg" alt="profil" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
