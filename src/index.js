import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import DashBoard from "./DashBoard";
import Bill from "./Bill";
import Reports from "./Reports";
import Designs from "./Designs";
import Status from "./Status";
import AddItem from "./AddItem";
import AddItemDetails from "./AddItemDetails";
import OrderDetails from "./OrderDetails";
import Submit from "./Submit";
const router = createBrowserRouter([
  {
    path: "/",
    element: <DashBoard />,
  },
  {
    path: "/Bill",
    element: <Bill />,
  },
  {
    path: "/Reports",
    element: <Reports />,
  },
  {
    path: "/Status",
    element: <Status />,
  },
  {
    path: "/Designs",
    element: <Designs />,
  },
  {
    path: "/AddItem",
    element: <AddItem />,
  },
  {
    path: "/AddItemDetails",
    element: <AddItemDetails />,
  },
  {
    path: "/OrderDetails",
    element: <OrderDetails />,
  },
  {
    path: "/Submit",
    element: <Submit />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
