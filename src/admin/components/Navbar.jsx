import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({
  onSidebarToggle,
  // onSearchToggle,
  onDarkModeToggle,
  isSearchFormVisible,
}) => {
  return (
    <nav>
      <i className="bx bx-menu" onClick={onSidebarToggle}></i>
      <form className={isSearchFormVisible ? "show" : ""}>
        <div className="form-input">
          <input type="search" placeholder="Search..." />
          <button className="search-btn" type="submit">
            <i className="bx bx-search"></i>
          </button>
        </div>
      </form>
      <input
        type="checkbox"
        id="theme-toggle"
        hidden
        onChange={onDarkModeToggle}
      />
      <label htmlFor="theme-toggle" className="theme-toggle"></label>
      <Link to="/notifications" className="notif">
        <i className="bx bx-bell"></i>
        <span className="count">12</span>
      </Link>
      <Link to="/user-profile" className="profile">
        <img
          src="https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.jpg"
          alt="Profile"
        />
      </Link>
    </nav>
  );
};

export default Navbar;
