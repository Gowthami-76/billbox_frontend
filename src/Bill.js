import React from "react";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { useNavigate } from "react-router";
import axios from "axios";
const Bill = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section className="billSection">
        <div className="customer-heading">
          <h1>Customer Details</h1>
        </div>
      </section>
      <section className="billSection2">
        <div>
          <form className="billForm">
            <div className="form-group">
              <label className="billLabel">Bill Number</label>
              <input type="text" className="form-control"></input>
            </div>
            <div className="form-group">
              <label className="billLabel">Name</label>
              <input type="text" className="form-control"></input>
            </div>
            <div className="form-group">
              <label className="billLabel">Phone Number</label>
              <input type="text" className="form-control"></input>
            </div>

            <div className="billButtonDiv">
              <button
                onClick={() => {
                  navigate("/addItem");
                }}
                className="btn btn-primary billnextbtn"
              >
                Next <BsArrowRightSquareFill />
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Bill;
