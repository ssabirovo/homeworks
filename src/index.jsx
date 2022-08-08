import React from "react";
import ReactDOM from "react-dom/client";
import "./base.scss";
import Tags from "./tags";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Tags
    separator={<div style={{ height: 8 }} />}
    tags={[
      { label: "Purple", color: "purple", centered: true, pointer: true },
      { label: "Blue", color: "blue", centered: true },
      { label: "Orange", color: "orange", centered: true },
      { label: "Magenta", color: "magenta", centered: true },
      { label: "Lime", color: "lime", centered: true },
    ]}
  />
);
