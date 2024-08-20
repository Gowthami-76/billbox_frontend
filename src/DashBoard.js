import React from "react";

import { useNavigate } from "react-router-dom";

function DashBoard() {
  const navigate = useNavigate();
  // const navigateToBill = (clickValue) => {
  //   // 👇️ navigate to /contacts
  //   if (clickValue === "Bill") {
  //     navigate("/Bill");
  //     console.log(clickValue, "clickValue");
  //   }
  // };
  return (
    <div className="container d-flex align-items-center justify-content-center flex-column">
      <h1 className="h1">Bill Box</h1>
      <div className="blockStyle row">
        <div className="col-6 sscol-xs-6 mr-3">
          <button
            className="buttonStyle animate__animated animate__slideInDown"
            onClick={() => navigate("/Bill")}
          >
            Bill
          </button>
          <button
            className="buttonStyle animate__animated animate__slideInDown"
            onClick={() => navigate("/Designs")}
          >
            Designs
          </button>
        </div>

        <div className="col-xs-6">
          <button
            className="buttonStyle animate__animated animate__slideInUp"
            onClick={() => navigate("/Status")}
          >
            Status
          </button>
          <button
            className="buttonStyle animate__animated animate__slideInUp"
            onClick={() => navigate("/Reports")}
          >
            Reports
          </button>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
