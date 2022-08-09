import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { ToastContainer } from "react-toastify";
import "./base.scss";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
    <ToastContainer autoClose={8000} />
  </React.StrictMode>
);
