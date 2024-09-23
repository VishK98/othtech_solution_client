import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../store/actions/user";

const Sidebar = ({ isClosed }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/login"); // Redirect user to login page after logout
  };

  return (
    <div className={`sidebar ${isClosed ? "close" : ""}`}>
      <Link to="/dashboard" className="logo">
        <i className="bx bx-code-alt"></i>
        <div className="logo-name">
          <span>Inventory</span>
        </div>
      </Link>
      <ul className="side-menu">
        <li>
          <Link to="/dashboard">
            <i className="bx bxs-dashboard"></i>Dashboard
          </Link>
        </li>
        <li className="active">
          <Link to="/products">
            <i className="bx bx-box"></i>Products
          </Link>
        </li>
        <li>
          <Link to="/categories">
            <i className="bx bx-category-alt"></i>Categories
          </Link>
        </li>
        <li>
          <Link to="/purchases">
            <i className="bx bx-cart"></i>Purchases
          </Link>
        </li>
        <li>
          <Link to="/sales">
            <i className="bx bx-line-chart"></i>Sales
          </Link>
        </li>
        <li>
          <Link to="/billings">
            <i className="bx bx-receipt"></i>Billings
          </Link>
        </li>
        <li>
          <Link to="/reports">
            <i className="bx bx-bar-chart-alt-2"></i>Reports
          </Link>
        </li>
        <li>
          <Link to="/settings">
            <i className="bx bx-cog"></i>Settings
          </Link>
        </li>
      </ul>
      <ul className="side-menu">
        <li>
          <Link to="#" className="logout" onClick={logoutHandler}>
            <i className="bx bx-log-out-circle"></i>
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
