import React from "react";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
import { AiOutlineSketch } from "react-icons/ai";
import { TbMenu2 } from "react-icons/tb";

const Header = () => {
  return (
    <div className="header-con">
      <div className="header">
        <div className="logo-con">
          <Link className="logo" to="home">
            <AiOutlineSketch />
          </Link>
        </div>
        <div className="donate-con">
          <Link>
            <button className="donate-btn">DONATE</button>
          </Link>
          <button className="menu-btn">
            <TbMenu2 />
          </button>
        </div>
      </div>

      <div>
        <Dropdown />
      </div>
    </div>
  );
};

export default Header;
