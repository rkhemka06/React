import React, { Component } from "react";

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a
        className="navbar-brand text-center"
        href="http://www.rajatkhemka12.me"
      >
        NavBar
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
