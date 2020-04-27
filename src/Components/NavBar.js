import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/WJ-Logo.png";


const NavBar = () => {
  return (
    <StyledNavBar>
      <div className="nav">
        <img className="logo" src={Logo} alt="logo" />
        <div className="links">

        <Link to="/protected" className="link-text">
          <p>Exercises</p>

        </Link>
          <Link to="/protected/list" className="link-text">
          <p>Add Exercises</p>
        </Link>
        <Link to="/" className="link-text">
          <p onClick={()=> localStorage.removeItem('token')}>Sign Out</p>
        </Link>
        </div>
      </div>
    </StyledNavBar>
  );
};

export default NavBar;