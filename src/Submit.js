import React from "react";
import { BsArrowRightSquareFill } from "react-icons/bs";
const Submit = () => {
  return (
    <div>
      <section className="billSection">
        <div className="customer-heading">
          <h1>Submit</h1>
        </div>
      </section>
      <section className="billSection2">
        <div>
          <form className="billForm">
            <div className="form-group">
              <label className="billLabel">Total Amount</label>
              <input type="text" className="form-control"></input>
            </div>
            <div className="form-group">
              <label className="billLabel">Amount Paid</label>
              <input type="text" className="form-control"></input>
            </div>
            <div className="form-group">
              <label className="billLabel">Delivery Date</label>
              <input type="date" className="form-control"></input>
            </div>

            <div className="submitButtonDiv">
              <button className="btn btn-primary billnextbtn">
                Submit <BsArrowRightSquareFill />
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Submit;
