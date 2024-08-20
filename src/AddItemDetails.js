import React from "react";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { useNavigate } from "react-router";
const AddItemDetails = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section className="addItemSection">
        <div className="customer-heading">
          <h1>Add Item Details</h1>
        </div>
      </section>
      <section className="addItemDetailsSection2">
        <form className="addItemDetailsForm">
          <div className="form-group row">
            <label className="col-md-4 col-form-label font-weight-bold">
              Select Item
            </label>
            <div class="col-md-8">
              <select
                className="form-select form-control"
                aria-label="Default select example"
              >
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-md-4 col-form-label font-weight-bold">
              Select Model
            </label>
            <div class="col-md-8">
              <input type="file" readonly class="form-control" />
            </div>
          </div>

          <div className="form-group row font-weight-bold">
            <label className="col-md-4 col-form-label">Measurements</label>
            <div class="col-md-8">
              <input type="text" readonly class="form-control" />
            </div>
          </div>

          <div className="form-group row ">
            <label className="col-md-4 col-form-label font-weight-bold">
              Size
            </label>
            <div class="col-md-8">
              <input type="text" readonly class="form-control" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-md-4 col-form-label font-weight-bold">
              Description
            </label>
            <div class="col-md-8">
              <input type="text" class="form-control" />
            </div>
          </div>
          <div className="billButtonDiv">
            <button
              onClick={() => {
                navigate("/OrderDetails");
              }}
              className="btn btn-primary billnextbtn"
            >
              Next <BsArrowRightSquareFill />
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddItemDetails;
