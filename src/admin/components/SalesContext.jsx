import React from "react";
import { Link } from "react-router-dom";

const SalesContext = ({ isDarkMode }) => {
  return (
    <main>
      <div className="header">
        <div className="left">
          <h1>Sales</h1>
          <ul className="breadcrumb">
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li style={{ marginLeft: "-10px" }}>
              <Link className="active">/ Sales</Link>
            </li>
          </ul>
        </div>
        <Link to="/reports" className="report">
          <i className="bx bx-cloud-download"></i>
          <span>Download CSV</span>
        </Link>
      </div>
    </main>
  );
};

export default SalesContext;
