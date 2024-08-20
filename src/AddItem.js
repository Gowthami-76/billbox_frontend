import React from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const AddItem = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section className="addItemSection">
        <div className="customer-heading">
          <h1>Order Details</h1>
        </div>
      </section>
      <section className="addItemSection2">
        <div>
          <form className="completeForm">
            <div className="addItemForm">
              <button
                className="btn btn-primary billnextbtn"
                onClick={() => {
                  navigate("/addItemDetails");
                }}
              >
                Add Item
                <span style={{ padding: "10px" }}>
                  <BsFillPlusCircleFill />
                </span>
              </button>
            </div>
            <div className="addItemButtonDiv"></div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddItem;
