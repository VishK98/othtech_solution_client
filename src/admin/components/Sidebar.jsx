import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../store/actions/user";

const Sidebar = ({ isClosed }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation(); 

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/"); 
  };

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
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
        <li className={isActive("/dashboard")}>
          <Link to="/dashboard">
            <i className="bx bxs-dashboard"></i>Dashboard
          </Link>
        </li>
        <li className={isActive("/products")}>
          <Link to="/products">
            <i className="bx bx-box"></i>Products
          </Link>
        </li>
        <li className={isActive("/categories")}>
          <Link to="/categories">
            <i className="bx bx-category-alt"></i>Categories
          </Link>
        </li>
        <li className={isActive("/purchases")}>
          <Link to="/purchases">
            <i className="bx bx-cart"></i>Purchases
          </Link>
        </li>
        <li className={isActive("/sales")}>
          <Link to="/sales">
            <i className="bx bx-line-chart"></i>Sales
          </Link>
        </li>
        <li className={isActive("/billings")}>
          <Link to="/billings">
            <i className="bx bx-receipt"></i>Billings
          </Link>
        </li>
        <li className={isActive("/reports")}>
          <Link to="/reports">
            <i className="bx bx-bar-chart-alt-2"></i>Reports
          </Link>
        </li>
        <li className={isActive("/settings")}>
          <Link to="/settings">
            <i className="bx bx-cog"></i>Settings
          </Link>
        </li>
      </ul>
      <ul className="side-menu">
        <li>
          <Link className="logout" onClick={logoutHandler}>
            <i className="bx bx-log-out-circle"></i>
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
