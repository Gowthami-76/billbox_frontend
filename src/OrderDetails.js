import React from "react";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const OrderDetails = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section className="addItemSection">
        <div className="customer-heading">
          <h1>Order Details</h1>
        </div>
      </section>
      <section className="addItemDetailsSection2">
        <div className="card-box orderDetailsForm">
          <div className="row order-details">
            <div className="col-md-6">
              <form>
                <label className="font-weight-bold ">Item Name</label>
                <p>Blouse Type</p>
                <label className="font-weight-bold">Measurements</label>
                <input type="text" />
                <label className="font-weight-bold">Size</label>
                <input type="text" />
                <label className="font-weight-bold">Description</label>
                <input type="text" />
              </form>
            </div>
            <div className="col-md-6 text-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReWvmm69kt8eB1Lqh3SQEsbASXBtgxRFwUsg&usqp=CAU"
                alt="designer"
                height={250}
              ></img>
            </div>
          </div>

          <div className="row order-details">
            <div className="col-md-6">
              <form>
                <label className="font-weight-bold ">Item Name</label>
                <p>Blouse Type</p>
                <label className="font-weight-bold">Measurements</label>
                <input type="text" />
                <label className="font-weight-bold">Size</label>
                <input type="text" />
                <label className="font-weight-bold">Description</label>
                <input type="text" />
              </form>
            </div>
            <div className="col-md-6 text-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReWvmm69kt8eB1Lqh3SQEsbASXBtgxRFwUsg&usqp=CAU"
                alt="designer"
                height={250}
              ></img>
            </div>
            <div className="billButtonDiv">
              <button
                onClick={() => {
                  navigate("/Submit");
                }}
                className="btn btn-primary billnextbtn"
              >
                Next <BsArrowRightSquareFill />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderDetails;
