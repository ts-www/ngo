import React from "react";
import { Link } from "react-router-dom";

const Dropdown = () => {
  return (
    <div className="dropdown-con">
      <div className="list-con">
        <ul className="list-items">
          <Link to="mission">
            <li>Our Mission </li>
          </Link>
          <Link to="impact">
            <li>Our Impact</li>
          </Link>
          <Link to="about">
            <li>About Us</li>
          </Link>
          <Link>
            <li>Donate</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
