import React from "react";
import { Link } from "react-router-dom";

const ReportsContext = ({ isDarkMode }) => {
  return (
    <main>
      <div className="header">
        <div className="left">
          <h1>Reports</h1>
          <ul className="breadcrumb">
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li style={{ marginLeft: "-10px" }}>
              <Link className="active">/ Reports</Link>
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

export default ReportsContext;


