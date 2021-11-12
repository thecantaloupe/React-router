import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="nav">
      <span className="nav-main">
        <Link to="/"> Canta-Stocks </Link>
      </span>
      <Link to="/stocks"> Stocks </Link>
      <Link to="/about"> About </Link>
    </div>
  );
};

export default Header;
